import MiniCssExtractPlugin, { Configuration } from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from './types/types'

export function buildPlugins({
    paths,
}: BuildOptions): Configuration['plugins'] {
    return [
        new HtmlWebpackPlugin({ template: paths.html }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ]
}
