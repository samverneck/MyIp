module.exports = {
  entry: [
    './src/index.js',
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['react', 'es2015'] },
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/',
  },
  resolve: { extensions: ['', '.js'] }
}
