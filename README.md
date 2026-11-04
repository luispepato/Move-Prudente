Move Prudente 🏃‍♂️

Projeto prático para a disciplina de Desenvolvimento Web do curso de Ciência da Computação (UNESP - Presidente Prudente).

O Move Prudente é um guia urbano feito para ajudar os moradores de Presidente Prudente a encontrarem lugares gratuitos ou acessíveis para praticar esportes e se exercitar (como academias ao ar livre, quadras públicas, pistas de caminhada e parques).

💡 O que o site faz

Guia de locais: Lista de parques e quadras com filtro por modalidade (corrida, futebol, skate, etc.) e busca por bairro.

Status em tempo real: Mostra se o local está aberto ou fechado dependendo do horário em que você acessa o site.

Mais próximo de você: Usa o GPS do celular/navegador para calcular a distância e mostrar qual local esportivo fica mais perto da sua localização.

Calculadora de calorias: Uma ferramenta rápida na aba de contato para estimar quantas calorias você gasta no treino.

Tabelas e Ranking: Tabela com horários e custos de cada espaço, além do ranking dos locais mais bem avaliados.

Formulário de cadastro: Área para indicar novos lugares ou deixar sua avaliação.

🛠️ Tecnologias usadas

Fizemos o projeto sem usar nenhum framework ou biblioteca (sem Bootstrap, React, jQuery, etc.), apenas Web padrão:

HTML5 (tags semânticas, formulários e player de áudio/vídeo)

CSS3 (Flexbox, CSS Grid e responsivo para celular)

JavaScript Vanilla (manipulação do DOM, filtros, validações e API de Geolocalização)

📁 Estrutura de arquivos

move-prudente/
├── index.html         # Página inicial
├── atracoes.html      # Guia completo de locais e busca
├── informacoes.html   # Tabelas de horários e ranking
├── itinerario.html    # Busca por GPS
├── contato.html       # Formulário e calculadora
├── css/
│   └── style.css      # Estilos do site
└── js/
    └── main.js        # Lógica dos filtros, GPS e calculadora


👥 Integrantes do grupo

Vitor Luiz Seribeli

Luis Felipe Neves Pepato

Leonardo Antônio Santos Silva

🚀 Como rodar

Não precisa instalar nada. Basta clonar o repositório e abrir o arquivo index.html em qualquer navegador ou colocar o link, https://luispepato.github.io/Move-Prudente/, na aba do navegador.
