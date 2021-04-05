const ID = 'windicss'

exports.name = ID

exports.apply = (api) => {
  api.hooks.chainWebpack.tap(ID, (config) => {
    config.module
      .rule(ID)
      .test(/\.vue$/)
      .use(ID)
      .loader('vue-windicss-preprocess')
      .options({
        compile: false, // false: interpretation mode; true: compilation mode
        globalPreflight: true, // set preflight style is global or scoped
        globalUtility: true, // set utility style is global or scoped
        prefix: 'windi-', // set compilation mode style prefix
      })
  })
}
