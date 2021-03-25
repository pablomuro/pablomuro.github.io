import fs from 'fs'
import path from 'path'
import consola from 'consola'



// @ts-ignore
import paths from './paths.json'

const tempFolder = path.join(__dirname, paths.tempFolder)

interface IScreenShot {
  imgPath: string
  type?: string
  quality?: string
  encoding?: string
  transparent?: boolean
  width?: number
  height?: number
}
export const makeScreenshot = async function (page: any, {
  imgPath,
  type,
  quality,
  encoding,
  transparent = false,
  width,
  height
}: IScreenShot) {
  let screenshotArgs: any = {
    type,
    omitBackground: transparent,
    encoding,
  }
  if (type === 'jpeg') {
    screenshotArgs.quality = quality ? quality : 80
  }

  try {
    await page.setViewport({ width, height });

    const tempFileName = `${tempFolder}/${imgPath.replace('/', '-')}.html`

    await page.goto(`file:${tempFileName}`);

    const element = await page.$('body')

    const coversFolderPath = path.join(process.cwd(), paths.coversFolder, imgPath)

    const image = await element?.screenshot({ path: coversFolderPath, ...screenshotArgs })

    return image
  } catch (error) {
    consola.error(error)
    throw (error)
  }
}
