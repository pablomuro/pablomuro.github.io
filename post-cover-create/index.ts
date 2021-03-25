import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import consola from 'consola'
import { Cluster } from 'puppeteer-cluster'
import { makeScreenshot } from './screenshot'

// @ts-ignore
import paths from './paths.json'

import { ICoverData, parseCoverTemplate, ReturnParse } from './parseCoverTemplate'

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

let bgTemplates = fs.readdirSync(path.resolve(__dirname, '../' + paths.bgTemplatesFolder))
bgTemplates = bgTemplates.filter(file => path.extname(file) == ".jpg" || path.extname(file) == ".png")

interface IInput {
  imgPath: string;
  coverData?: ICoverData
}

interface IOptions {
  input: IInput[];
  width: number
  height: number
}

interface IFile {
  dir: String
  path: String
  slug: String
  extension: String
  createdAt: String
  updatedAt: String
}

export const coverImagePlaceholder = '#coverImage'
export const openGraphImagePlaceholder = '#openGraphImage'

export async function coverGenerate(document: any) {
  const { slug, extension, title, description, mainTag } = document
  const docPath = document.path

  consola.info(`Generating Image cover for ${slug}${extension}`)

  document.coverImage = `cover-${slug}.png`
  document.openGraphImage = `open-graph/cover-${slug}.png`

  const randomIndex = (max: number) => Math.floor(Math.random() * (max));

  const bgTemplate = bgTemplates[randomIndex(bgTemplates.length)]
  consola.info(`With Background template: ${bgTemplate}`)

  const input: IInput[] = [
    {
      imgPath: document.coverImage,
      coverData: {
        mainTag: mainTag,
        bgTemplate
      }
    },
    {
      imgPath: document.openGraphImage,
      coverData: {
        coverTitle: title,
        coverSubtitle: description,
        bgTemplate
      }
    }
  ]
  await createImages({ input })

  const fileName = `${docPath}${extension}`
  const filePath = path.join('./blog-posts', fileName)

  readFile(filePath).then(fileBuffer => {
    let fileContent = fileBuffer.toString()

    fileContent = fileContent.replace('#coverImage', document.coverImage)
    fileContent = fileContent.replace('#openGraphImage', document.openGraphImage)

    // writeFile(filePath, fileContent)
    consola.success(`MD File ${filePath} saved`)
  })
}

const createImages = async function (options: any) {
  const {
    input,
    width,
    height
  }: IOptions = options

  if (!input) {
    throw Error('You must provide an input/coverData property.')
  }

  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: 2,
    retryLimit: 10,
    retryDelay: 5000
  });

  let buffers: string[] = []

  cluster.on('taskerror', (err, data) => {
    console.log(`Errosasar crawling ${data}: ${err.message}`);
  });

  try {
    await cluster.task(async ({ page, data: { imgPath }, worker }) => {
      const buffer = await makeScreenshot(page, { imgPath, width, height })
      if (buffer) consola.success(`Image ${imgPath} created`)

      buffers.push(buffer);
    });

    input.forEach(async _input => {
      const { imgPath, coverData } = _input
      if (coverData) {
        await parseCoverTemplate(coverData, width, height, imgPath)
        await cluster.execute({ ..._input })
      }

    })

    await cluster.idle();
    await cluster.close();
  } catch (error) {
    consola.error("In index")
    consola.error(error)
  }



  return buffers
}

export default coverGenerate;
