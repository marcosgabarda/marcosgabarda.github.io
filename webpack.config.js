const path = require('path');

module.exports = {
  context: path.join(__dirname, './src'),
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
            "style-loader",  // Add exports of a module as style to DOM
            "css-loader",  // Loads CSS file with resolved imports and returns CSS code
            "sass-loader",  // Loads and compiles a SASS/SCSS file
        ]
    }]
  }
};
