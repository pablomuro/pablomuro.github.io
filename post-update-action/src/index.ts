import * as core from '@actions/core'

async function changeUpdatedAt() {
  try {
    const files: any = core.getInput('files')
    console.log(files)
    core.debug(`Changing updatedAt in  ...`) // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true

    // core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    core.setFailed(error.message)
  }
}

changeUpdatedAt()
