const path = require('path')
const { expect } = require('chai')
const { readFile } = require('../lib/file')
const { convertMarkdown } = require('../lib/markdown')

describe('readme', () => {
  it('should read file', async () => {
    const markdown = await readFile(path.join(__dirname, './fixtures/README.md'))
    expect(markdown).to.equal('# test\n')
  })

  it('should convert markdown', async () => {
    const markdown = await readFile(path.join(__dirname, './fixtures/README.md'))
    const html = await convertMarkdown(markdown)
    expect(html).to.equal('<h1 id="test">test</h1>\n')
  })
})
