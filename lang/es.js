const metaTags = {
  'root-meta-title':
    "Pablo Muro's Dev | Javascript Fullstack Software Developer",
  'root-meta-description':
    'Bienvenido a mi vida de desarrollador. Personal portafolio  de Pablo Muro con blog',

  'blog-meta-title':
    "Pablo Muro's Dev Blog | Javascript Fullstack Software Developer",
  'blog-meta-description':
    'Artículos sobre Javascript, Desarrollo Web, Estilo de Vida Dev e Ciencias de la Computación: conceptos básicos, algoritmos y estructuras de datos',
}

const blogPage = {
  'blog-title': 'Entradas del Blog',
}

const blogSearchComponent = {
  'blog-search-placeholder': 'Buscar entradas',
}

export default {
  welcome: 'Welcome',
  'min-read': 'min read',
  ...metaTags,
  ...blogPage,
  ...blogSearchComponent,
}
