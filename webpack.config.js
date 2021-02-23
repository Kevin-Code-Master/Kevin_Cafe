const path = require('path');

module.exports = {
  mode: "development",
//   devtool: "none", //removes the eval() in the main.js, you have to restart webapack  by calling npm start
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};