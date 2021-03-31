const metaTags = {
  'root-meta-title':
    "Pablo Muro's Dev | Javascript Fullstack Software Developer",

  'root-meta-description':
    'Welcome to my dev life. Pablo Muro personal portfolio with a blog',

  'blog-meta-description':
    'Articles about Javascript, Web Development, Developer Lifestyle, and Computer Science - basics, algorithms, and data structures',
}

const siteHeader = {
  resume: 'Resume'
}

// === Pages ===
const indexPage = {
  'hi': 'Hi',
  'my-name-is': "My name is Pablo and I'm a Fullstack Developer"
}

const blogPage = {
  'blog-title': 'Blog Posts',
}

const TagPage = {
  'tag-page-title': 'Posts tagged',
  'tag-back-all-posts': 'Back to All Posts',
  'tag-posts-not-found': '😢 No posts found with this tag',
}

// === Componentes ===
const blogSearchComponent = {
  'blog-search-placeholder': 'Search posts',
}

const readingTimeComponent = {
  'min-read': 'min read',
}

const InfiniteLoadingSlot = {
  'no-more': 'These are all the posts 😄',
  'no-results': 'No results'
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
