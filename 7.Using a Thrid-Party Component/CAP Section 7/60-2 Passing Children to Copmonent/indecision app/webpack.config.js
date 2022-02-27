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
  },
  devtool: 'cheap-module-eval-source-map ',
  devServer: {
    contentBase:path.join(__dirname,'public')
  }
 
}
// loader
//https://webpack.js.org/configuration/module/#ruleloader
/**
 * Rule.loader is a shortcut to Rule.use: [ { loader } ]. See Rule.use and UseEntry.loader for details. */
/**
 * https://webpack.js.org/configuration/devtool/
 */
//  devtool:'eval-cheap-module-source-map' this one works fine even It's not the same as andrew mention 
//devtool:'cheap-module-eval-source-map ' this one works too 
/** 
 * what is the difference 
 * cheap-module-eval-source-map vs eval-cheap-module-source-map
 */

 