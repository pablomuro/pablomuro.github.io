const metaTags = {
  'root-meta-title':
    "Pablo Muro's Dev | Javascript Fullstack Software Developer",

  'root-meta-description':
    'Bem-vindo à minha vida de desenvolvedor. Pablo Muro pessoal portfólio com um blog',

  'blog-meta-description':
    'Artigos sobre Javascript, Desenvolvimento Web, Estilo de Vida Dev e Ciência da Computação - noções básicas, algoritmos e estruturas de dados',
}

// === Pages =
const indexPage = {
  'hi': 'Oi',
  'my-name-is': "Meu nome é Pablo e eu sou um Desenvolvedor Fullstack"
}
const blogPage = {
  'blog-title': 'Posts do Blog',
}

const TagPage = {
  'tag-page-title': 'Posts marcados',
  'tag-back-all-posts': 'Voltar para Todos os Posts',
  'tag-posts-not-found': '😢 Nenhuma postagem encontrada com esta tag',
}

// === Componentes ===
const blogSearchComponent = {
  'blog-search-placeholder': 'Buscar postagens',
}

const readingTimeComponent = {
  'min-read': 'min de leitura',
}
const InfiniteLoadingSlot = {
  'infinite-no-more': 'Esses são todos os posts 😄',
  'infinite-no-results': 'Sem resultados',
  'infinite-error': 'Ops, algo deu errado 😢',
  'infinite-error-btn': 'Tentar novamente'
}

// === export ===
export default {
  ...metaTags,
  ...indexPage,
  ...TagPage,
  ...blogPage,
  ...blogSearchComponent,
  ...readingTimeComponent,
  ...InfiniteLoadingSlot
}
