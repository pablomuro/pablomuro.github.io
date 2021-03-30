import { IContentDocument, contentFunc } from '@nuxt/content/types/content'

export const getBlogPosts = async (
  lang: string,
  $content: contentFunc,
  skip: number = 0
) => {
  try {
    let blogPosts: IContentDocument | IContentDocument[] = await $content(lang)
      .only([
        'title',
        'description',
        'coverImage',
        'slug',
        'tags',
        'publish_date',
        'readingTime',
        'createdAt',
      ])
      .sortBy('createdAt', 'desc')
      .limit(6)
      .skip(skip)
      .fetch()
    if (!Array.isArray(blogPosts)) {
      blogPosts = [blogPosts]
    }
    return {
      blogPosts,
    }
  } catch (error) {
    throw error
  }
}


export const getTagPosts = async (
  lang: string,
  $content: contentFunc,
  tag: string,
  skip: number = 0
) => {
  try {

    let blogPosts: IContentDocument | IContentDocument[] = await $content(
      lang
    )
      .where({ tags: { $contains: tag } })
      .limit(6)
      .skip(skip)
      .sortBy('createdAt', 'desc')
      .fetch()

    if (!Array.isArray(blogPosts)) {
      blogPosts = [blogPosts]
    }

    return {
      blogPosts,
      tag,
      lang,
    }
  } catch (error) {
    throw error
  }
}
