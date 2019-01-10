export const imports = {
  'src/components/data-entry/input/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-data-entry-input-index" */ 'src/components/data-entry/input/index.mdx'),
  'src/components/general/button/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-general-button-index" */ 'src/components/general/button/index.mdx'),
}
