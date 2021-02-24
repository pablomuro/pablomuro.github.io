const metaTags = {
  'root-meta-title':
    "Pablo Muro's Dev | Javascript Fullstack Software Developer",

  'root-meta-description':
    'Bem-vindo à minha vida de desenvolvedor. Pablo Muro pessoal portfólio com um blog',

  'blog-meta-description':
    'Artigos sobre Javascript, Desenvolvimento Web, Estilo de Vida Dev e Ciência da Computação - noções básicas, algoritmos e estruturas de dados',
}

const blogPage = {
  'blog-title': 'Posts do Blog',
}

const TagPage = {
  'tag-page-title': 'Posts marcados',
  'tag-back-all-posts': 'Voltar para Todos os Posts',
  'tag-posts-not-found': '😢 Nenhuma postagem encontrada com esta tag',
}

const blogSearchComponent = {
  'blog-search-placeholder': 'Buscar postagens',
}

export default {
  welcome: 'eai manolo',
  'min-read': 'min de leitura',
  ...metaTags,
  ...TagPage,
  ...blogPage,
  ...blogSearchComponent,
}
