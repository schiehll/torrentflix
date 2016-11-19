const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')
const filesize = require('filesize')
const gzipSize = require('gzip-size').sync
const rimrafSync = require('rimraf').sync
const webpack = require('webpack')
const config = require('../config/webpack.config.prod.babel')
const paths = require('../config/paths')
const recursive = require('recursive-readdir')
const stripAnsi = require('strip-ansi')

const removeFileNameHash = fileName => {
  return fileName
    .replace(paths.appBuild, '')
    .replace(/\/?(.*)(\.\w+)(\.js|\.css)/, (match, p1, p2, p3) => p1 + p3)
}

const getDifferenceLabel = (currentSize, previousSize) => {
  const FIFTY_KILOBYTES = 1024 * 50
  const difference = currentSize - previousSize
  const fileSize = !Number.isNaN(difference) ? filesize(difference) : 0
  if (difference >= FIFTY_KILOBYTES) {
    return chalk.red('+' + fileSize)
  } else if (difference < FIFTY_KILOBYTES && difference > 0) {
    return chalk.yellow('+' + fileSize)
  } else if (difference < 0) {
    return chalk.green(fileSize)
  } else {
    return ''
  }
}

// Print a detailed summary of build files.
const printFileSizes = (stats, previousSizeMap) => {
  const assets = stats.toJson().assets
    .filter(asset => /\.(js|css)$/.test(asset.name))
    .map(asset => {
      const fileContents = fs.readFileSync(paths.appBuild + '/' + asset.name)
      const size = gzipSize(fileContents)
      const previousSize = previousSizeMap[removeFileNameHash(asset.name)]
      const difference = getDifferenceLabel(size, previousSize)
      return {
        folder: path.join('build', path.dirname(asset.name)),
        name: path.basename(asset.name),
        size: size,
        sizeLabel: filesize(size) + (difference ? ' (' + difference + ')' : '')
      }
    })
  assets.sort((a, b) => b.size - a.size)
  const longestSizeLabelLength = Math.max.apply(null,
    assets.map(a => stripAnsi(a.sizeLabel).length)
  )
  assets.forEach(asset => {
    let sizeLabel = asset.sizeLabel
    const sizeLength = stripAnsi(sizeLabel).length
    if (sizeLength < longestSizeLabelLength) {
      const rightPadding = ' '.repeat(longestSizeLabelLength - sizeLength)
      sizeLabel += rightPadding
    }
    console.log(
      '  ' + sizeLabel +
      '  ' + chalk.dim(asset.folder + path.sep) + chalk.cyan(asset.name)
    )
  })
}

// Print out errors
const printErrors = (summary, errors) => {
  console.log(chalk.red(summary))
  console.log()
  errors.forEach(err => {
    console.log(err.message || err)
    console.log()
  })
}

// Create the production build
const build = previousSizeMap => {
  console.log('Creating an optimized production build...')
  webpack(config).run((err, stats) => {
    if (err) {
      printErrors('Failed to compile.', [err])
      process.exit(1)
    }

    if (stats.compilation.errors.length) {
      printErrors('Failed to compile.', stats.compilation.errors)
      process.exit(1)
    }

    console.log(chalk.green('Compiled successfully.'))
    console.log()

    console.log('File sizes after gzip:')
    console.log()
    printFileSizes(stats, previousSizeMap)
    console.log()
  })
}

const copyPublicFolder = () => {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml
  })
}

// First, read the current file sizes in build directory.
// This lets us display how much they changed later.
recursive(paths.appBuild, (err, fileNames) => {
  if (err) {
    // ignore it
  }

  const previousSizeMap = (fileNames || [])
    .filter(fileName => /\.(js|css)$/.test(fileName))
    .reduce((memo, fileName) => {
      const contents = fs.readFileSync(fileName)
      const key = removeFileNameHash(fileName)
      memo[key] = gzipSize(contents)
      return memo
    }, {})

  // Remove all content but keep the directory so that
  // if you're in it, you don't end up in Trash
  rimrafSync(paths.appBuild + '/*')

  // Start the webpack build
  build(previousSizeMap)

  // Merge with the public folder
  copyPublicFolder()
})
