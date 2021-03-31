import * as core from '@actions/core'
import fs from 'fs'
import path from 'path'
import {promisify} from 'util'

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const readdir = promisify(fs.readdir)
const exists = promisify(fs.exists)

async function changeUpdatedAt() {
  try {
    const files: string[] = JSON.parse(core.getInput('files', {required: true}))

    await Promise.all(
      files.map(async (fileName: string) => {
        const languages = ['en', 'es', 'pt-br']

        for (let language of languages) {
          const filePath = `blog-posts/${language}/${fileName}`

          if (await exists(path.resolve(filePath))) {
            const fileBuffer = await readFile(filePath)
            let fileContent = fileBuffer.toString()

            const updateDate = new Date().toISOString()
            const updatedAtField = `updatedAt: ${updateDate}`

            const updatedAtFieldRegex = /(updatedAt:.*\n)/gm

            fileContent = fileContent.replace(
              updatedAtFieldRegex,
              updatedAtField
            )

            await writeFile(filePath, fileContent)

            break
          }
        }
      })
    )
    core.debug(`Changing updatedAt in  ...`) // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true

    // core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    core.setFailed(error.message)
  }
}

changeUpdatedAt()
