const fs = require('fs')
const path = require('path')
const readPkgUp = require('read-pkg-up')

const readFile = filePath => (
  new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return reject(err)
      return resolve(data)
    })
  })
)

const maybeReadModule = async filePath => {
  let str = ''

  try {
    str = await readFile(path.join(process.cwd(), './node_modules/', filePath)) // npm3+
  } catch (err) {
    try {
      str = await readFile(path.join(__dirname, '../node_modules/', filePath)) // npm2
    } catch (error) {
      console.warn(`Could not locate module ${filePath}`)
    }
  }

  return str
}

const readName = async filePath => {
  const { pkg } = await readPkgUp({ cwd: path.dirname(filePath) })
  return pkg.name
}

module.exports = {
  readFile,
  maybeReadModule,
  readName,
}
