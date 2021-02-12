import dotenv from 'dotenv'
import DevToClient from './devto-wrapper'
import LinkedinClient from './linkedin-wrapper'
import TwitterClient from './twitter-wrapper'

dotenv.config({ path: './social-publish/social.env' })

const twitterClient = new TwitterClient({
  apiKey: process.env.TWITTER_API_KEY || '',
  apiSecret: process.env.TWITTER_API_SECRET || '',
  accessToken: process.env.TWITTER_ACCESS_TOKEN || '',
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET || '',
})

const devToClient = new DevToClient(process.env.DEVTO_API_KEY || '')

const linkedinClient = new LinkedinClient(
  process.env.LINKEDIN_TOKEN || '',
  process.env.LINKEDIN_AUTOR_ID || ''
)

async function main() {
  try {
    // TODO - check if there is a new file to publish
    const hasNewArticle = false
    if (hasNewArticle === false) return

    console.log('tedssaas')

    devToClient.createArticleBody('')
    linkedinClient.createArticleBody('')
    twitterClient.createArticleBody('')

    await devToClient.publishArticle()
    await linkedinClient.publishArticle()
    await twitterClient.publishArticle()

  } catch (error) {
    console.log('Error on publish', error)
    console.log(error.toJson())
  }
}

main()
