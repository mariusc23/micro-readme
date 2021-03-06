const path = require('path')
const url = require('url')
const { readFile, readName } = require('./lib/file')
const { convertMarkdown } = require('./lib/markdown')
const { wrapHtml } = require('./lib/html')
const { getStyles } = require('./lib/styles')

const defaultFilePath = path.join(process.cwd(), './README.md')
const defaultOptions = {
  path: defaultFilePath,
  url: '/',
  methods: ['HEAD', 'GET'],
}

let markdown = ''
let html = ''
let styles = ''
let result = ''
let title = ''

const readme = (o = {}) => next => async (req, res) => {
  const options = Object.assign({}, defaultOptions, o)

  const { pathname } = url.parse(req.url)
  if ((pathname !== options.url) && (pathname !== `${options.url}/`)) {
    return next(req, res)
  }

  if (options.methods.indexOf(req.method) === -1) {
    return next(req, res)
  }

  res.setHeader('Content-Type', 'text/html')

  markdown = markdown || await readFile(options.path)
  html = html || await convertMarkdown(markdown)
  styles = styles || await getStyles()
  title = title || options.title || await readName(options.path)
  result = result || wrapHtml(html, styles, title)

  return result
}

module.exports = {
  readme,
}
