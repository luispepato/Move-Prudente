// Move Prudente - funções organizadas por responsabilidade
const $ = (s) => document.querySelector(s);
const minutos = (h) => { const [a, b] = h.split(":"); return Number(a) * 60 + Number(b); };
const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt) e.textContent = txt; return e; };

function estaAberto(l, agora = new Date()) {
  const m = agora.getHours() * 60 + agora.getMinutes();
  return m >= minutos(l.abre) && m <= minutos(l.fecha);
}
function formatarValor(l) { return l.valor === 0 ? "Gratuito" : "R$ " + l.valor.toFixed(2).replace(".", ","); }
function distanciaKm(lat1, lng1, lat2, lng2) { // fórmula de Haversine
  const r = (x) => x * Math.PI / 180, dLat = r(lat2 - lat1), dLng = r(lng2 - lng1);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(r(lat1)) * Math.cos(r(lat2)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(h));
}

function criarCard(l, extra) {
  const a = el("article", "card");
  a.append(el("div", "th c-" + l.cat, CATEGORIAS[l.cat]));
  const cb = el("div", "cb");
  cb.append(el("h3", "", l.nome), el("p", "", l.bairro + " · " + formatarValor(l)), el("p", "", l.desc));
  const aberto = estaAberto(l);
  cb.append(el("span", aberto ? "st-aberto" : "st-fechado", aberto ? "Aberto agora" : "Fechado agora"));
  cb.append(el("span", "meta", "Horário: " + l.abre + " às " + l.fecha));
  if (extra) cb.append(el("strong", "", extra));
  a.append(cb);
  return a;
}

/* ---------- Início ---------- */
function iniciarBuscaRapida() {
  const f = $("#busca-rapida");
  if (!f) return;
  f.addEventListener("submit", (e) => { e.preventDefault(); location.href = "atracoes.html?q=" + encodeURIComponent($("#q").value); });
}

/* ---------- Guia de locais ---------- */
function iniciarGuia() {
  const lista = $("#lista-locais");
  if (!lista) return;
  const params = new URLSearchParams(location.search);
  let cat = params.get("cat") || "todos";
  const campo = $("#filtro-texto");
  campo.value = params.get("q") || "";
  const barra = $("#filtros");
  const opcoes = Object.assign({ todos: "Todos" }, CATEGORIAS);

  function desenhar() {
    const termo = campo.value.trim().toLowerCase();
    lista.replaceChildren();
    let n = 0;
    LOCAIS.forEach((l) => {
      const texto = (l.nome + l.bairro + CATEGORIAS[l.cat]).toLowerCase();
      if ((cat === "todos" || l.cat === cat) && texto.includes(termo)) { lista.append(criarCard(l)); n++; }
    });
    $("#vazio").hidden = n > 0;
    barra.querySelectorAll("button").forEach((b) => b.classList.toggle("on", b.dataset.cat === cat));
  }
  for (const chave in opcoes) {
    const b = el("button", "", opcoes[chave]);
    b.type = "button"; b.dataset.cat = chave;
    b.addEventListener("click", () => { cat = chave; desenhar(); });
    barra.append(b);
  }
  campo.addEventListener("input", desenhar);
  desenhar();
}

/* ---------- Tabelas e ranking ---------- */
function iniciarTabelas() {
  const corpo = $("#corpo-locais");
  if (!corpo) return;
  let gratis = 0;
  LOCAIS.forEach((l) => {
    const tr = el("tr");
    [l.nome, l.bairro, CATEGORIAS[l.cat], l.abre + " – " + l.fecha, formatarValor(l), l.cap.toLocaleString("pt-BR")]
      .forEach((t) => tr.append(el("td", "", t)));
    corpo.append(tr);
    if (l.valor === 0) gratis++;
  });
  $("#total-locais").textContent = LOCAIS.length + " locais cadastrados, " + gratis + " gratuitos";
  const ev = $("#corpo-eventos");
  EVENTOS.forEach((e) => { const tr = el("tr"); e.forEach((t) => tr.append(el("td", "", t))); ev.append(tr); });
  const ordenados = LOCAIS.slice().sort((a, b) => b.nota - a.nota);
  ordenados.forEach((l) => $("#ranking").append(el("li", "", l.nome + " (nota " + l.nota.toFixed(1).replace(".", ",") + ")")));
}

/* ---------- Geolocalização ---------- */
function iniciarItinerario() {
  const btn = $("#btn-localizar");
  if (!btn) return;
  const msg = $("#msg-geo"), saida = $("#resultado-geo");
  function mostrar(pos) {
    const { latitude, longitude } = pos.coords;
    const ordem = LOCAIS.map((l) => ({ l, km: distanciaKm(latitude, longitude, l.lat, l.lng) })).sort((a, b) => a.km - b.km);
    msg.className = "ok";
    msg.textContent = "Mais próximo: " + ordem[0].l.nome + ", a cerca de " + ordem[0].km.toFixed(1).replace(".", ",") + " km.";
    saida.replaceChildren();
    ordem.forEach((o) => saida.append(criarCard(o.l, "≈ " + o.km.toFixed(1).replace(".", ",") + " km de você")));
  }
  function falhar(err) {
    let texto;
    switch (err.code) {
      case 1: texto = "Você não permitiu o acesso à localização. Libere a permissão no navegador ou use o guia de locais."; break;
      case 2: texto = "Não foi possível descobrir onde você está agora. Tente de novo em outro lugar ou com internet melhor."; break;
      default: texto = "A localização demorou demais. Tente novamente.";
    }
    msg.className = "erro"; msg.textContent = texto;
  }
  btn.addEventListener("click", () => {
    if (!("geolocation" in navigator)) { msg.className = "erro"; msg.textContent = "Seu navegador não suporta geolocalização."; return; }
    msg.className = ""; msg.textContent = "Buscando sua localização...";
    navigator.geolocation.getCurrentPosition(mostrar, falhar, { timeout: 10000 });
  });
}

/* ---------- Formulário, nota média e calculadora ---------- */
function validarCampo(id, regra, texto) {
  const campo = $("#" + id), ok = regra(campo.value.trim());
  $("#e-" + id).textContent = ok ? "" : texto;
  return ok;
}
function iniciarFormulario() {
  const f = $("#form-aval");
  if (!f) return;
  const notas = ["nota-estrutura", "nota-limpeza", "nota-seguranca"];
  function atualizarMedia() {
    let soma = 0, i = 0;
    while (i < notas.length) { soma += Number($("#" + notas[i]).value); i++; }
    $("#nota-media").textContent = (soma / notas.length).toFixed(1).replace(".", ",");
  }
  notas.forEach((n) => $("#" + n).addEventListener("input", atualizarMedia));
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    const resultados = [
      validarCampo("nome", (v) => v.length >= 3, "Digite seu nome completo (mínimo 3 letras)."),
      validarCampo("email", (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Digite um e-mail válido, como nome@email.com."),
      validarCampo("senha", (v) => v.length >= 6, "A senha precisa ter pelo menos 6 caracteres."),
      validarCampo("fone", (v) => v.replace(/\D/g, "").length >= 10, "Digite o telefone com DDD."),
      validarCampo("local", (v) => v.length > 0, "Informe o local que você quer avaliar ou cadastrar.")
    ];
    const msg = $("#msg-form");
    if (resultados.every(Boolean)) { msg.className = "ok"; msg.textContent = "Enviado! Obrigado por ajudar a mapear o esporte em Prudente."; }
    else { msg.className = "erro"; msg.textContent = "Corrija os campos em vermelho e envie de novo."; }
  });
  f.addEventListener("reset", () => { document.querySelectorAll(".erro").forEach((x) => x.textContent = ""); $("#msg-form").textContent = ""; setTimeout(atualizarMedia); });

  $("#form-calc").addEventListener("submit", (e) => {
    e.preventDefault();
    const peso = Number($("#peso").value), min = Number($("#tempo").value), km = Number($("#dist").value);
    let met;
    switch ($("#tipo").value) { case "corrida": met = 9.8; break; case "bicicleta": met = 7.5; break; default: met = 3.5; }
    const saida = $("#res-calc");
    if (!(peso > 0 && min > 0)) { saida.className = "erro"; saida.textContent = "Informe peso e tempo maiores que zero."; return; }
    let texto = "Gasto estimado: " + Math.round(met * peso * (min / 60)) + " kcal.";
    if (km > 0) { const p = min / km; texto += " Pace: " + Math.floor(p) + ":" + String(Math.round((p % 1) * 60)).padStart(2, "0") + " min/km."; }
    saida.className = "ok"; saida.textContent = texto;
  });
}

iniciarBuscaRapida(); iniciarGuia(); iniciarTabelas(); iniciarItinerario(); iniciarFormulario();
