const { maybeReadModule } = require('./file')

const getStyles = async () => {
  let styles = ''
  styles += await maybeReadModule('github-markdown-css/github-markdown.css')
  styles += await maybeReadModule('highlight.js/styles/github.css')
  return styles
}

module.exports = {
  getStyles,
}
