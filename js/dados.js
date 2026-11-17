// DADOS DE EXEMPLO: horários, valores e coordenadas são aproximados.
// O grupo deve conferir e substituir cada item antes da entrega.
const CATEGORIAS = { corrida:"Corrida", futebol:"Futebol", volei:"Vôlei", skate:"Skate", ginastica:"Ginástica ao ar livre" };
const LOCAIS = [
{ nome:"Parque do Povo", cat:"corrida", img:"media/img/parque-do-povo.jpg",
  bairro:"Jardim Marupiara", desc:"Principal área de lazer da cidade, ideal para caminhadas, atividades físicas, passeios e momentos de convivência ao ar livre.",
  abre:"0:00", fecha:"23:59", valor:0, cap:500, nota:4.5,
  lat:-22.15947, lng:-51.45243 },

  { nome:"Futebol Arte HR", cat:"futebol", img:"media/img/futebol-arte.webp",
  bairro:"Jardim Aquinópolis", desc:"Espaço esportivo destinado à prática de futebol society, jogos recreativos e atividades esportivas.",
  abre:"17:00", fecha:"23:59", valor:100, cap:14, nota:4.9,
  lat:-22.1258, lng:-51.4085 }, 

  { nome:"Cidade da Criança", cat:"ginastica", img:"media/img/cidade-da-crianca.jfif",
  bairro:"Rodovia Raposo Tavares", desc:"Parque com equipamentos de ginástica e áreas de lazer para a família.",
  abre:"9:00", fecha:"17:00", valor:0, cap:300, nota:3.9,
  lat:-22.1156, lng:-51.4267 }, 

{ nome:"Pista de skate municipal", cat:"skate", img:"media/img/pista-de-skate.webp",
  bairro:"Parque do Povo", desc:"Pista com obstáculos para iniciantes e experientes.",
  abre:"0:00", fecha:"23:59", valor:0, cap:60, nota:3.6,
  lat:-22.1250, lng:-51.4510 },

{ nome:"Quadras de areia do Parque do Povo", cat:"volei", img:"media/img/quadra-de-areia.jfif",
  bairro:"Parque do Povo", desc:"Duas quadras de vôlei de areia para uso livre.",
  abre:"0:00", fecha:"23:59", valor:0, cap:20, nota:4.2,
  lat:-22.15947, lng:-51.45243 },

  { nome:"Futebol Arte Átomo (Planeta Gol)", cat:"futebol", img:"media/img/atomo.webp",
  bairro:"Central Park Residence", desc:"Espaço esportivo destinado à prática de futebol society, jogos recreativos e atividades esportivas.",
  abre:"17:00", fecha:"23:59", valor:100, cap:14, nota:4.8,
  lat:-22.1233412, lng:-51.4196071 },

  { nome:"Pista de corrida da Unesp", cat:"corrida", img:"media/img/pista.jfif",
  bairro:"UNESP", desc:"Pista oficial de atletismo com 400 metros, seis raias na pista oval e estrutura para corridas, saltos, arremessos e treinamentos esportivos.",
  abre:"8:00", fecha:"18:00", valor:0, cap:50, nota:3.6,
  lat:-22.1208, lng:-51.4089  },

  { nome:"Quadra de Futebol – Sesc Thermas", cat:"futebol", img:"media/img/sesc.jfif",
  bairro:"Jardim das Rosas", desc:"Espaço esportivo destinado à prática de futebol e futsal recreativo, com atividades esportivas e lazer para os visitantes.",
  abre:"8:10", fecha:"19:30", valor:0, cap:20, nota:4.4,
  lat:-22.1195, lng:-51.4098  },
];
const EVENTOS = [
  ["INTER UNESP", "UNESP", "Poliesportivo", "20/11/2026"],
  ["INTERCOMPP", "UNESP", "Poliesportivo", "28/11/2026"],
  ["Campeonato Amador", "Caetano Peretti", "Futebol", "Em definição"]
];
