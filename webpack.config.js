const path = require('path');

module.exports = {
  entry: './source/js/main.js', /*точка входа*/
  devtool: 'source-map', /*карта кода*/
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'build/js'), /*путь до файла конфига*/
  } /*точка выхода*/
};
