import path from 'path'
import fs from 'fs'

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => {
  return path.resolve(appDirectory, relativePath)
}

export default {
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appSrc: resolveApp('src'),
  appNodeModules: resolveApp('node_modules')
}
