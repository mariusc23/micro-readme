const marked = require('marked')
const hljs = require('highlight.js')

marked.setOptions({
  renderer: new marked.Renderer(),
  breaks: true,
  sanitize: true,
  highlight(code) {
    return hljs.highlightAuto(code).value
  },
})

const convertMarkdown = str => (
  new Promise((resolve, reject) => {
    marked(str, (err, result) => {
      if (err) return reject(err)
      return resolve(result)
    })
  })
)

module.exports = {
  convertMarkdown,
}
