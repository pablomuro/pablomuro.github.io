import {
  TwitterClient as _TwitterClient,
  StatusesUpdateParams,
  StatusesUpdate,
  FollowersIds,
} from 'twitter-api-client'
import IClientOptions from 'twitter-api-client/dist/base/IClientOptions'

export default class TwitterClient extends _TwitterClient {
  private articleBody: StatusesUpdateParams | undefined

  constructor(options: IClientOptions) {
    super(options)
    this.articleBody = undefined
  }

  createArticleBody(mdFile: string) {
    // TODO - fazer parse e tudo mais
    this.articleBody = {
      status: mdFile,
    }
  }

  async getMe() {
    try {
      const result: FollowersIds = await this.accountsAndUsers.followersIds()
      return result
    } catch (error) {
      console.log('Publish error on publishArticle', error.message)
      throw error
    }
  }

  async publishArticle() {
    try {
      if (!this.articleBody) {
        throw new Error('Error create the article first')
      }
      const result: StatusesUpdate = await this.tweets.statusesUpdate(
        this.articleBody
      )
      return result
    } catch (error) {
      console.log('Publish error on publishArticle', error.message)
      throw error
    }
  }
}
