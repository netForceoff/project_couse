import { Configuration } from 'webpack'
import { Mode, Paths } from '../webpack/types/config'
import { resolve } from 'path'
import cssLoader from '../webpack/loaders/cssLoader'

export default ({ config }: { config: Configuration }): Configuration => {
  const paths: Paths = {
    assets: {
      svg: ''
    },
    build: '',
    html: '',
    entry: '',
    src: resolve(__dirname, '..', '..', 'src')
  }

  


  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')
  config.module?.rules?.push(cssLoader(config.mode === Mode.DEVELOPMENT))

  return config
}
