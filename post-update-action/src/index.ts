import * as core from '@actions/core'
import fs from 'fs'
import path from 'path'
import {promisify} from 'util'

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const exists = promisify(fs.exists)

async function changeUpdatedAt() {
  try {
    const files: string[] = JSON.parse(core.getInput('files', {required: true}))

    core.info(`Running : changeUpdatedAt`)

    await Promise.all(
      files.map(async (fileName: string) => {
        const filePath = path.resolve(fileName)

        if (await exists(filePath)) {
          const fileBuffer = await readFile(filePath)
          let fileContent = fileBuffer.toString()

          const updateDate = new Date().toISOString()
          const updatedAtField = `updatedAt: ${updateDate}\n`

          const updatedAtFieldRegex = /(updatedAt:.*\n)/gm

          fileContent = fileContent.replace(updatedAtFieldRegex, updatedAtField)

          await writeFile(filePath, fileContent)
          core.info(`Post : ${fileName} updated`)
        }
      })
    )
  } catch (error) {
    core.setFailed(error.message)
  }
}

changeUpdatedAt()
