# micro-readme

> Microservice documentation for micro.

## Installation

    npm install --save @mariusc23/micro-readme

## Usage

```js
const { readme } = require('@mariusc23/micro-readme')

const middleware = [
  readme(__dirname + '/README.md', '/docs', { methods: ['GET'] })
]
```

## API

`readme([filePath, urlPath, options])`

#### `filePath`

- path to `README.md`
- defaults to `process.cwd() + /README.md`

#### `urlPath`

- url to respond to
- defaults to `/`

#### `options`

##### `options.methods`

Array of allowed methods.

## License

Copyright (c) 2017 Marius Craciunoiu. Licensed under the MIT license.
