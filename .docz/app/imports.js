export const imports = {
  'src/components/general/button/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-general-button-index" */ 'src/components/general/button/index.mdx'),
}
