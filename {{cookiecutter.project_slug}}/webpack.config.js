const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = [
  {
    mode: 'development',
    entry: './src/index.tsx',
    target: 'web',
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      hot: true,
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: /src/,
          use: [{ loader: 'ts-loader' }],
        },
        {
          test: /\.s[ca]ss$/,
          include: /src/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    output: {
      path: __dirname + '/build',
      filename: 'index.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'jsx'],
      mainFiles: ['index'],
      alias: {
        {{ cookiecutter.short_name }}_components: path.resolve(__dirname, 'src/components'),
        {{ cookiecutter.short_name }}_containers: path.resolve(__dirname, 'src/containers'),
        {{ cookiecutter.short_name }}_utils: path.resolve(__dirname, 'src/utils'),
        {{ cookiecutter.short_name }}_images: path.resolve(__dirname, 'src/images'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      })
    ]
  },
]
