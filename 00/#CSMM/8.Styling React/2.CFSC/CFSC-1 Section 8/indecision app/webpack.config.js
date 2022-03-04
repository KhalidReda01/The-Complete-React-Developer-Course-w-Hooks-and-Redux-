const path = require('path');
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename:'bundle.js'
  },
  module: {
    rules: [{
    loader: 'babel-loader',
    test: /.\.js$/,
    exclude:/node_modules/
    }, {
      test: /\.scss$/,
      // test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase:path.join(__dirname, 'public')
  }

  
}
/*
when I rewrite it it working fine 
module: {
    rules: [{
      loader: 'babel-loader',
      test: /.\.js$/,
      exclude:/node_modules/
    }]
  }
*/
/**
 * 
 * There is error at this
 * module: {
    rules: [{
    loader: 'babel-loader',
    test: /.\.js$/,
    exculde:/node_modules/             /// the error is at exclude
    }]
  }

yarn run build
yarn run v1.22.5
$ webpack  --watch
Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
 - configuration.module.rules[0] has an unknown property 'exculde'. These properties are valid:
   object { enforce?, exclude?, include?, issuer?, loader?, loaders?, oneOf?, options?, parser?, query?, resource?, resourceQuery?, compiler?, rules?, test?, use? }
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
  
 */

/**
 * there is a problem at this replace it with SC to see where is the bug 
 * OMG It's working so where is the error at the previous one 
 * I can't see any differences but try again 
 *  module: {
    rules: [{
      loader: 'babel-loader',
      test: /.\.js$/,
      exclude:/node_modules/
    }]
  }
 * 
 */
