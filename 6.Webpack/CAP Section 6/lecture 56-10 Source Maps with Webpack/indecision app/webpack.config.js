// OMG I missed the output:
const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
     path: path.join(__dirname,'public'),
  filename:'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /.\.js$/,
      exclude:/node_modules/
    }]
  }
 
}
// loader
//https://webpack.js.org/configuration/module/#ruleloader
/**
 * Rule.loader is a shortcut to Rule.use: [ { loader } ]. See Rule.use and UseEntry.loader for details. */ 
 