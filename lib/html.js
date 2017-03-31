const wrapHtml = (html, styles, title) => (
`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>${title || ''}</title>
    <style>
      .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
      }
      ${styles}
    </style>
  </head>
  <body>
    <div class="markdown-body">
      ${html}
    </div>
  </body>
</html>
`
)

module.exports = {
  wrapHtml,
}
