const path = require('path')
const url = require('url')
const { readFile } = require('./lib/file')
const { convertMarkdown } = require('./lib/markdown')
const { wrapHtml } = require('./lib/html')
const { getStyles } = require('./lib/styles')

const defaultFilePath = path.join(process.cwd(), './README.md')
const defaultOptions = {
  methods: ['GET'],
}

let markdown = ''
let html = ''
let styles = ''
let result = ''

const readme = (filePath = defaultFilePath, urlPath = '/', o = {}) => next => async (req, res) => {
  const options = Object.assign({}, defaultOptions, o)

  const { pathname } = url.parse(req.url)
  if (pathname !== urlPath) {
    return next(req, res)
  }

  if (options.methods.indexOf(req.method) === -1) {
    return next(req, res)
  }

  res.setHeader('Content-Type', 'text/html')

  markdown = markdown || await readFile(filePath || defaultFilePath)
  html = html || await convertMarkdown(markdown)
  styles = styles || await getStyles()
  result = result || wrapHtml(html, styles)

  return result
}

module.exports = {
  readme,
}