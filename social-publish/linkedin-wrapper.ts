import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'
import { LinkedinArticle } from './linkedin-interfaces'

export default class LinkedinClient {
  private axiosLinkedin: AxiosInstance
  private authorUrn: string
  private articleBody: LinkedinArticle | undefined

  constructor(token: string, authorId: string) {
    this.authorUrn = `urn:li:person:${authorId}`
    this.articleBody = undefined
    const axiosLinkedinConfig: AxiosRequestConfig = {
      baseURL: 'https://api.linkedin.com/v2',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'x-li-format': 'json',
        'X-Restli-Protocol-Version': '2.0.0',
      },
    }
    this.axiosLinkedin = axios.create(axiosLinkedinConfig)
  }

  async getMe() {
    try {
      const result: AxiosResponse = await this.axiosLinkedin.get('/me')
      return result.data
    } catch (error) {
      console.log('GetMe error', error.message)
      throw error
    }
  }

  createArticleBody(mdFile: string) {
    // TODO - fazer parse e tudo mais
    this.articleBody = new LinkedinArticle(this.authorUrn, mdFile)
  }

  async publishArticle() {
    try {
      if (!this.articleBody) {
        throw new Error('Error create the article first')
      }
      const result: AxiosResponse = await this.axiosLinkedin.post(
        '/ugcPosts',
        this.articleBody
      )
      return result.data
    } catch (error) {
      console.log('Publish error on publishArticle', error.message)
      throw error
    }
  }
}
