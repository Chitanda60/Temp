/*
 ** webpack 基础
 */

const webpack = require('webpack');

const config = require('./config');
const utils = require('./utils');
const assign = require('object-assign');

const px2rem = require('postcss-px2rem');

// 动态生成 目录下的 entries ( src/[name]/ 下含有 app.js 的情况下生成 对应的 [name].js)
const project_entries = utils.mapEntries(config.build.assetsSrcRoot);

// 自定义 entries
const custom_entries = config.entries || [];

console.log("Entries:");
const entries = Object.assign({}, project_entries, custom_entries);
console.log( entries );
console.log();

// 生成对应的 [name].css
const extractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new extractTextPlugin('css/[name].css');


module.exports = {
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].chunk.js',
    publicPath: config.build.assetsPublicPath
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.styl$/,
      loader: extractCSS.extract(['css!postcss', 'stylus'])
    }, {
      test: /\.less$/,
      loader: extractCSS.extract(['css!postcss', 'less'])
    }, {
      test: /\.scss$/,
      loader: extractCSS.extract(['css?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!postcss', 'sass'])
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 1000,
        name: 'images/[name].[hash:10].[ext]'
      }
    }]
  },

  postcss: function() {
    return [ px2rem({remUnit: 37.5})];
  },

  babel: {
    presets: ['stage-0', 'es2015', 'react'],
    plugins: ['transform-decorators-legacy']
  },

  reslove: {
    extensions: ['', '.js', '.jsx']    
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },  

  plugins: [
    extractCSS,
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: "common",
    //     minChunks: 10,
    // }),
    new webpack.DefinePlugin({
      // 基础 URL 地址, 根据环境变量加载不同的配置文件
      ENV_BASE_URL: JSON.stringify(config.build.ENV_BASE_URL)
    })
  ]

}