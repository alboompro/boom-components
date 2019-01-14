export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/components/data-entry/autocomplete/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-data-entry-autocomplete-index" */ 'src/components/data-entry/autocomplete/index.mdx'),
  'src/components/data-entry/checkbox/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-data-entry-checkbox-index" */ 'src/components/data-entry/checkbox/index.mdx'),
  'src/components/data-entry/input/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-data-entry-input-index" */ 'src/components/data-entry/input/index.mdx'),
  'src/components/data-entry/radio/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-data-entry-radio-index" */ 'src/components/data-entry/radio/index.mdx'),
  'src/components/data-entry/slider/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-data-entry-slider-index" */ 'src/components/data-entry/slider/index.mdx'),
  'src/components/data-entry/switch/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-data-entry-switch-index" */ 'src/components/data-entry/switch/index.mdx'),
  'src/components/general/button/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-general-button-index" */ 'src/components/general/button/index.mdx'),
}
