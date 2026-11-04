// DADOS DE EXEMPLO: horários, valores e coordenadas são aproximados.
// O grupo deve conferir e substituir cada item antes da entrega.
const CATEGORIAS = { corrida:"Corrida", futebol:"Futebol", volei:"Vôlei", skate:"Skate", ginastica:"Ginástica ao ar livre" };
const LOCAIS = [
  { nome:"Parque do Povo", cat:"corrida", bairro:"Centro", desc:"Pista de caminhada e corrida em meio ao verde, com bebedouros e iluminação.", abre:"05:00", fecha:"22:00", valor:0, cap:500, nota:4.7, lat:-22.1160, lng:-51.4030 },
  { nome:"Estádio Prudentão", cat:"futebol", bairro:"Vila Marcondes", desc:"Maior estádio da cidade, com jogos e eventos esportivos.", abre:"08:00", fecha:"18:00", valor:20, cap:45000, nota:4.2, lat:-22.1310, lng:-51.3790 },
  { nome:"Cidade da Criança", cat:"ginastica", bairro:"Jardim Bongiovani", desc:"Parque com equipamentos de ginástica e áreas de lazer para a família.", abre:"06:00", fecha:"20:00", valor:0, cap:300, nota:4.4, lat:-22.1050, lng:-51.4150 },
  { nome:"Pista de skate municipal", cat:"skate", bairro:"Zona Oeste", desc:"Pista com obstáculos para iniciantes e experientes.", abre:"07:00", fecha:"21:00", valor:0, cap:60, nota:4.0, lat:-22.1290, lng:-51.4210 },
  { nome:"Quadras de areia do Parque do Povo", cat:"volei", bairro:"Centro", desc:"Duas quadras de vôlei de areia para uso livre.", abre:"06:00", fecha:"22:00", valor:0, cap:48, nota:4.3, lat:-22.1175, lng:-51.4045 },
  { nome:"Academia ao ar livre do Bongiovani", cat:"ginastica", bairro:"Jardim Bongiovani", desc:"Aparelhos de musculação ao ar livre, sempre abertos ao público.", abre:"00:00", fecha:"23:59", valor:0, cap:30, nota:4.1, lat:-22.1085, lng:-51.4120 },
  { nome:"Pista de corrida da Unesp", cat:"corrida", bairro:"Jardim Aviação", desc:"Pista no campus, boa para treinos de ritmo.", abre:"06:00", fecha:"19:00", valor:0, cap:120, nota:4.5, lat:-22.1190, lng:-51.4070 },
  { nome:"Quadra poliesportiva do Jardim Aviação", cat:"futebol", bairro:"Jardim Aviação", desc:"Quadra coberta para futsal, basquete e vôlei.", abre:"08:00", fecha:"22:00", valor:15, cap:40, nota:3.9, lat:-22.1340, lng:-51.3950 }
];
const EVENTOS = [
  ["Corrida Rústica de Aniversário", "Parque do Povo", "Corrida", "Em definição"],
  ["Copa Prudente de Futsal", "Quadra do Jardim Aviação", "Futebol", "Em definição"],
  ["Torneio de Vôlei de Areia", "Parque do Povo", "Vôlei", "Em definição"]
];
