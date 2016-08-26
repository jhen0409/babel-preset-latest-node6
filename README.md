# babel-preset-latest-node6

> Babel preset including [es2015-node6](https://github.com/jhen0409/babel-preset-es2015-node6), es2016, es2017.

## Install

```sh
$ npm install --save-dev babel-preset-latest-node6
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["latest-node6"]
}
```

### Via CLI

```sh
$ babel script.js --presets latest-node6
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["latest-node6"]
});
```

### Options

* `object-rest`: Use `es2015-node6/object-rest` instead of `es2015-node6`. (See [this](https://github.com/jhen0409/babel-preset-es2015-node6#usage)) (Disabled by default)
* `es2015`: Enable `es2015-node6` transformations, you can set object to pass `es2015` options. (Enabled by default)
* `es2016`: Enable  `es2016` transformations. (Enabled by default)
* `es2017`: Enable `es2017` transformations. (Enabled by default)

```js
{
  presets: [
    ["latest-node6", {
      "object-rest": true,
      "es2015": { loose: true },
      "es2016": false,
      "es2017": false,
    }]
  ]
}
```

## License

[MIT](LICENSE)
