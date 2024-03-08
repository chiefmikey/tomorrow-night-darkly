import path from 'node:path';

import { Configuration } from 'webpack';

const SRC_DIR = path.join(path.resolve(), '/client/src');
const DIST_DIR = path.join(path.resolve(), '/public/dist');

const css = ['style-loader', 'css-loader'];
const scss = ['style-loader', 'css-loader', 'sass-loader'];

const config: Configuration = {
  entry: `${SRC_DIR}/index.tsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      node: 'current',
                    },
                  },
                ],
                '@babel/preset-react',
                ['@babel/preset-typescript', { jsxPragma: 'h' }],
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: css,
      },
      {
        test: /\.s[ac]ss$/,
        use: scss,
      },
      {
        test: /\.(png|ttf|jp(e*)g|svg)$/,
        use: 'url-loader?limit=100000&name=img/[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.vue', '.json', '...'],
  },
  experiments: {
    topLevelAwait: true,
  },
  devtool: 'inline-source-map',
};

export default config;
