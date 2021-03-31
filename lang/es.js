const metaTags = {
  'root-meta-title':
    "Pablo Muro's Dev | Javascript Fullstack Software Developer",

  'root-meta-description':
    'Bienvenido a mi vida de desarrollador. Personal portafolio  de Pablo Muro con blog',

  'blog-meta-description':
    'Artículos sobre Javascript, Desarrollo Web, Estilo de Vida Dev e Ciencias de la Computación: conceptos básicos, algoritmos y estructuras de datos',
}

const siteHeader = {
  resume: 'Currículo'
}

// === Pages ===
const indexPage = {
  'hi': 'Oye',
  'my-name-is': "Mi nombre es Pablo y soy un Desarrollador Fullstack"
}

const blogPage = {
  'blog-title': 'Entradas del Blog',
}

const TagPage = {
  'tag-page-title': 'Entradas etiquetadas',
  'tag-back-all-posts': 'Volver a Todas las Publicaciones',
  'tag-posts-not-found': '😢 No se encontraron publicaciones con esta etiqueta',
}

// === Componentes ===
const blogSearchComponent = {
  'blog-search-placeholder': 'Buscar entradas',
}

const readingTimeComponent = {
  'min-read': 'min de lectura',
}
const InfiniteLoadingSlot = {
  'infinite-no-more': 'Estas son todos las publicaciones 😄',
  'infinite-no-results': 'Sin resultados',
  'infinite-error': 'Ups, algo salió mal 😢',
  'infinite-error-btn': 'Intentar nuevamente'
}

// === export ===
export default {
  ...metaTags,
  ...siteHeader,
  ...indexPage,
  ...TagPage,
  ...blogPage,
  ...blogSearchComponent,
  ...readingTimeComponent,
  ...InfiniteLoadingSlot
}
