export interface ShareMedia {
  status: 'READY'
  description?: string
  media?: string
  originalUrl?: string
  title?: string
}
interface IShareContent {
  'com.linkedin.ugc.ShareContent': {
    shareCommentary: { text: string }
    shareMediaCategory: 'NONE' | 'ARTICLE' | 'IMAGE'
    media?: ShareMedia[]
  }
}

class ShareContent implements IShareContent {
  'com.linkedin.ugc.ShareContent': {
    shareCommentary: { text: string }
    shareMediaCategory: 'NONE' | 'ARTICLE' | 'IMAGE'
    media?: ShareMedia[]
  }

  constructor() {
    this['com.linkedin.ugc.ShareContent'] = {
      shareCommentary: { text: '' },
      shareMediaCategory: 'NONE',
    }
  }

  setShareCommentary(text: string) {
    this['com.linkedin.ugc.ShareContent'].shareCommentary.text = text
  }

  setShareMediaCategory(mediaCategory: 'NONE' | 'ARTICLE' | 'IMAGE') {
    this['com.linkedin.ugc.ShareContent'].shareMediaCategory = mediaCategory
  }
}

export class LinkedinArticle {
  private author: string
  private lifecycleState: 'PUBLISHED' = 'PUBLISHED'
  private visibility: {
    'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC'
  } = {
      'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC',
    }

  private specificContent: ShareContent = new ShareContent()

  constructor(author: string, articleData: unknown) {
    this.author = author
    this.specificContent.setShareMediaCategory('NONE')
    this.specificContent.setShareCommentary(articleData as string)
  }
}

const exemplo = {
  author: 'urn:li:person:{{person_id}}',
  lifecycleState: 'PUBLISHED',
  specificContent: {
    'com.linkedin.ugc.ShareContent': {
      shareCommentary: {
        text: '',
      },
      shareMediaCategory: 'ARTICLE',
      media: [
        {
          status: 'READY',
          description: {
            text: '',
          },
          originalUrl: '',
          title: {
            text: '',
          },
        },
      ],
    },
  },
  visibility: {
    'com.linkedin.ugc.MemberNetworkVisibility': 'CONNECTIONS',
  },
}
