import { IApi, utils } from 'umi';

export default (api: IApi) => {
  api.chainWebpack((config) => {
    const module = config.module
      .rule('svg-loader')
      .test(/\.svg$/)

    module
      .use('loader')
      .loader('file-loader')
      .options({})

    module
      .use('loader')
      .loader('svgo-loader')
      .options({
        configFile: false
      })

    return config;
  })
}