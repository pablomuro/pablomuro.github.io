const metaTags = {
  'root-meta-title':
    "Pablo Muro's Dev | Javascript Fullstack Software Developer",

  'root-meta-description':
    'Bienvenido a mi vida de desarrollador. Personal portafolio  de Pablo Muro con blog',

  'blog-meta-description':
    'Artículos sobre Javascript, Desarrollo Web, Estilo de Vida Dev e Ciencias de la Computación: conceptos básicos, algoritmos y estructuras de datos',
}

const blogPage = {
  'blog-title': 'Entradas del Blog',
}

const TagPage = {
  'tag-page-title': 'Entradas etiquetadas',
  'tag-back-all-posts': 'Volver a Todas las Publicaciones',
  'tag-posts-not-found': '😢 No se encontraron publicaciones con esta etiqueta',
}

const blogSearchComponent = {
  'blog-search-placeholder': 'Buscar entradas',
}

export default {
  welcome: 'Welcome',
  'min-read': 'min read',
  ...metaTags,
  ...TagPage,
  ...blogPage,
  ...blogSearchComponent,
}
