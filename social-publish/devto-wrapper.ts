import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'

interface DevToArticleSchema {
  title: string
  // eslint-disable-next-line camelcase
  body_markdown: string
  published: boolean
  series?: string
  // eslint-disable-next-line camelcase
  main_image: string
  // eslint-disable-next-line camelcase
  canonical_url: string
  description: string
  tags: string[]
}
export default class DevToClient {
  private axiosDevTo: AxiosInstance
  private articleBody: DevToArticleSchema | undefined

  constructor(apiKey: string) {
    this.articleBody = undefined
    const axiosDevToConfig: AxiosRequestConfig = {
      baseURL: 'https://dev.to/api',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
    }
    this.axiosDevTo = axios.create(axiosDevToConfig)
  }

  createArticleBody(mdFile: string) {
    // TODO - fazer parse e tudo mais
  }

  async getMe() {
    try {
      const result: AxiosResponse = await this.axiosDevTo.get(
        '/articles/me/published'
      )
      return result.data
    } catch (error) {
      console.log('Publish error on getArticles', error.message)
      throw error
    }
  }

  async publishArticle() {
    try {
      if (!this.articleBody) {
        throw new Error('Error create the article first')
      }
      const result: AxiosResponse = await this.axiosDevTo.post(
        '/articles',
        this.articleBody
      )
      return result.data
    } catch (error) {
      console.log('Publish error on publishArticle', error.message)
      throw error
    }
  }
}
