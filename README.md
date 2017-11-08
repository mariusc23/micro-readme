# micro-readme

> Microservice documentation for micro.

## Installation

    npm install --save @mariusc23/micro-readme

## Usage

```js
const { readme } = require('@mariusc23/micro-readme')

const middleware = [
  readme({
    path: __dirname + '/README.md',
    url '/docs',
    methods: ['GET'],
  })
]
```

## API

`readme([options])`

#### `options`

##### `options.path`

- path to `README.md`
- defaults to `process.cwd() + /README.md`

##### `options.url`

- url to respond to
- defaults to `/`

##### `options.methods`

Array of allowed methods.

## License

Copyright (c) 2017 Marius Craciunoiu. Licensed under the MIT license.
