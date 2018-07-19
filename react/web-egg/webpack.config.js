module.exports = {
  egg: true,
  framework: 'react',
  devtool: 'source-map',
  entry: {
    include: ['app/web/page',
      { layout: 'app/web/framework/layout/layout.jsx?loader=false' },
      { 'spa/redux': 'app/web/page/spa/redux.jsx?loader=false' },
      { 'spa/client': 'app/web/page/spa/client.jsx?loader=false' },
      { 'spa/ssr': 'app/web/page/spa/ssr.jsx?loader=false' }
    ],
    exclude: ['app/web/page/test'],
    loader: {
      client: 'app/web/framework/entry/client-loader.js',
      server: 'app/web/framework/entry/server-loader.js'
    }
  },
  alias: {
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'sass-loader',
        // 'css-loader'
      ]
    }]
  },
  cssModule: {
    include: 'app/web/page/css/module'
  },
  dll: ['react', 'react-dom'],
  loaders: {
    eslint: false,
    css: {
      exclude: [], // 开启node_modules 目录, 解决mint-ui css in module
    },
    less: false, // 没有使用, 禁用可以减少npm install安装时间
    stylus: false, // 没有使用, 禁用可以减少npm install安装时间
  },
  plugins: {
    imagemini: false
  },
  done() {
    console.log('---webpack compile finish---');
  }
};
