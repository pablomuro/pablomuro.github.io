import Vue from 'vue'
import { createRenderer } from 'vue-server-renderer'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import postcss from 'postcss'
import consola from 'consola'

// @ts-ignore
import paths from './paths.json'

const tempFolder = path.join(__dirname, paths.tempFolder)

const readFile = promisify(fs.readFile)
const unlink = promisify(fs.unlink)

const template = `
    <!DOCTYPE html><html lang="en">
    <head><link rel="stylesheet" href="{{ cssHref }}"></head>
    <body>
    <!--vue-ssr-outlet-->
    </body></html>
  `
const render = createRenderer({ template })

export interface ICoverData {
  coverTitle?: string
  coverSubtitle?: string
  mainTag?: string
  bgTemplate?: string
}

export interface ReturnParse {
  (): Promise<void>
}
// export type ReturnParse = Promise<ReturnParse | undefined>

export const parseCoverTemplate = async function (coverData: ICoverData, width: number, height: number, imgPath: string): Promise<ReturnParse | undefined> {
  const tempFileName = `${tempFolder}/${imgPath.replace('/', '-')}`

  try {
    const htmlTemplate = (await readFile(path.resolve(__dirname, paths.coverTemplate))).toString()

    const mainSassFile = (await readFile(path.resolve(__dirname, '../' + paths.mainSass))).toString()
    const templateSassFile = (await readFile(path.resolve(__dirname, paths.coverTemplateSass))).toString()

    const plugins = [
      require('postcss-import'),
      require('autoprefixer'),
      require('postcss-nested'),
      require('tailwindcss'),
      require('postcss-discard-comments')
    ]

    const cssOptions = {
      syntax: require('postcss-scss'),
    }

    const mainCss = await postcss(plugins).process(mainSassFile, { ...cssOptions, from: path.resolve(__dirname, '../' + paths.mainSass) }).then(result => result)
    const templateCss = await postcss(plugins).process(templateSassFile, { ...cssOptions, from: path.resolve(__dirname, paths.coverTemplateSass) }).then(result => result)

    const templateData: ICoverData = {
      coverTitle: '',
      coverSubtitle: '',
      bgTemplate: '',
      mainTag: '',
      ...coverData
    }

    const vueApp = new Vue({
      data: {
        ...templateData,
        containerStyle: {
          width: `${width}px`,
          height: `${height}px`,
          backgroundImage: `url(${path.join(process.cwd(), paths.bgTemplatesFolder, templateData.bgTemplate as string)})`
        },
        avatar: {
          backgroundImage: `url(${path.join(process.cwd(), paths.imagesFolder, 'avatar.png')})`
        },
      },
      beforeMount() {
        if (this.coverTitle && this.coverSubtitle) {
          console.log(this.coverTitle, this.coverSubtitle)
        } else if (this.mainTag) {
          console.log(this.mainTag)
        }
      },
      template: htmlTemplate
    })

    const renderHtml = await render.renderToString(vueApp, { cssHref: `${tempFileName}.css` })
    const renderCss = mainCss.css + templateCss.css

    fs.writeFileSync(`${tempFileName}.html`, renderHtml, { flag: 'w+' })
    fs.writeFileSync(`${tempFileName}.css`, renderCss, { flag: 'w+' })
  } catch (error) {
    consola.error(error)
  }

  return async () => {
    await unlink(`${tempFileName}.html`)
    await unlink(`${tempFileName}.css`)
  }

}
