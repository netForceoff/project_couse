import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {RuleSetRule} from 'webpack'
import {BuildOptions} from "../types/config";

const loaders = (options: BuildOptions): RuleSetRule[] => ([
    {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    },
    {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    }
                }
            },
            "sass-loader"
        ],
    },
    {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    },
    {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }
])

export default loaders;
