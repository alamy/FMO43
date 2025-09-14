// feed.js
// Estrutura do feed da aplicação

const feed = [
  {
    titulo: "Bem-vindo à rede social FMO43!",
    texto: "Aqui você acompanha novidades, comunicados e conteúdos exclusivos.",
    datahora: "2025-09-13T08:00:00" // ajuste a data/hora conforme necessário
  },
  {
    titulo: "Reunião de Aprendiz",
    texto: "Reunião de Aprendiz nesta terça-feira, dia 16.",
    datahora: "2025-09-13T10:00:00" // há 2 horas
  },
  {
    titulo: "Baile da Grande Loja",
    texto: "O Baile da Grande Loja acontecerá em 4 de outubro.",
    datahora: "2025-09-12T11:00:00" // há 1 dia
  }
];

// Disponibiliza o feed globalmente para uso em outros scripts
window.feed = feed;
