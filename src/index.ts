import { IApi } from 'umi';

export default (api: IApi) => {
  api.chainWebpack((config) => {
    config.module
      .rule('svg')
      .use('file-loader')
      .loader('file-loader')
      .tap((options) => {
        return {
          ...options,
          name: 'static/[hash:8].[ext]',
        }
      });

    config.module
      .rule('svg')
      .use('svgo-loader')
      .loader('svgo-loader')
      .options({
        configFile: false
      });

    return config;
  })
}