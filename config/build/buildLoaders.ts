import {ModuleOptions} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import * as assert from "assert";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {

    const isDev = options.mode === 'development'

    const assetLoader = {
        test: /\.(png)$/i,
        type: 'asset/resource'
    }

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }
        }
    }


    return[
        {
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader,
                cssLoaderWithModules,
            ],
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        assetLoader
    ]
}