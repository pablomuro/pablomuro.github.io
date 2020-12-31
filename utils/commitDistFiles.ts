import { promisify } from 'util'
// eslint-disable-next-line camelcase
import child_process from 'child_process'
const exec = promisify(child_process.exec)

;(async function () {
  const command: string =
    "git add dist/* ; git commit -m '[bot] automated commit dist'"
  try {
    const { stdout, stderr } = await exec(command)
    if (stderr.includes('Everything up-to-date')) {
      console.log(stderr)
    } else {
      console.log(stdout)
      console.log(stderr)
    }
  } catch (err) {
    console.error(err)
  }
})()

export default function a(){}
