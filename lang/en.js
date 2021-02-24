const metaTags = {
  'root-meta-title':
    "Pablo Muro's Dev | Javascript Fullstack Software Developer",
  'root-meta-description':
    'Welcome to my dev life. Pablo Muro personal portfolio with a blog',

  'blog-meta-title':
    "Pablo Muro's Dev Blog | Javascript Fullstack Software Developer",
  'blog-meta-description':
    'Articles about Javascript, Web Development, Developer Lifestyle, and Computer Science - basics, algorithms, and data structures',
}

const blogPage = {
  'blog-title': 'Blog Posts',
}

const blogSearchComponent = {
  'blog-search-placeholder': 'Search posts',
}

export default {
  welcome: 'Welcome',
  'min-read': 'min read',
  ...metaTags,
  ...blogPage,
  ...blogSearchComponent,
}
