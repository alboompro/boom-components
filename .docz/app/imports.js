export const imports = {
  'src/components/general/buttons/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-general-buttons-index" */ 'src/components/general/buttons/index.mdx'),
}
