import {BuildOptions} from "../types/config";
import {Configuration} from 'webpack-dev-server'

const server = (options: BuildOptions): Configuration => ({
    port: options.port,
    open: true,
    historyApiFallback: true
})

export default server;
