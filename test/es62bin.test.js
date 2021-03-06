'use strict';

require('babel-polyfill');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _compiler = require('../lib/compiler');

var _compiler2 = _interopRequireDefault(_compiler);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _babelCore = require('babel-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('es62bin', function () {
  it('should return code`s header is `#!/usr/bin/env node`', function () {
    var fileName = _path2.default.join(__dirname, './fixtures/demo.es6');
    var myRes = (0, _compiler2.default)(fileName);
    var babelRes = (0, _babelCore.transformFileSync)(fileName, {
      presets: 'latest',
      minified: true,
      compact: true
    }).code;
    _assert2.default.equal(myRes, '#!/usr/bin/env node\n' + babelRes);
  });
});
