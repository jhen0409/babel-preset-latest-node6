function preset(context, opts = {}) {
  // See https://github.com/jhen0409/babel-preset-es2015-node6/blob/master/object-rest.js
  const es2015BuildPreset = !opts['object-rest'] ?
    require('babel-preset-es2015-node6').buildPreset :
    require('babel-preset-es2015-node6/object-rest').buildPreset;
  return {
    presets: [
      opts.es2015 !== false && [es2015BuildPreset, opts.es2015],
      opts.es2016 !== false && require('babel-preset-es2016'),
      opts.es2017 !== false && require('babel-preset-es2017'),
    ].filter(Boolean),
  };
};

module.exports = preset({});

Object.defineProperty(module.exports, "buildPreset", {
  configurable: true,
  writable: true,
  enumerable: false,
  value: preset,
});
