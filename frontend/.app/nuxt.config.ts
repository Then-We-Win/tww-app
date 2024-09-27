export default defineNuxtConfig({
  modules: ['@vueuse/nuxt'],
  plugins: ['~/plugins/vuedraggable.js'],
  ssr: false,
  runtimeConfig: {
    public: {
      API: process.env.API,
      PROTOCOL: process.env.PROTOCOL,
      USER: process.env.DIRECTUS_USER,
      PASSWORD: process.env.DIRECTUS_PASSWORD,
    },
  },
  extends: [
    /**
     * This extends the base Tairo layer.
     *
     * Alternatively you can use the following:
     * ["gh:cssninjaStudio/tairo/layers/tairo#v1.4.0", {
     *    install: true,
     *    auth: import.meta.env.GITHUB_TOKEN,
     * }]
     *
     * @see https://github.com/unjs/c12#extending-config-layer-from-remote-sources
     *
     * This would allows you to create an empty git repository
     * with only your source code and no demo.
     */

    /**
     * Uncomment the following line to add the Tairo Layout Sidebar layer
     */
    '../layers/tairo-layout-sidebar',
    '../layers/tairo-layout-collapse',
    '../layers/tairo-layout-topnav',
    '../layers/tairo-layout-iconnav',
    '../layers/tairo',
  ],

  /**
   * Load local font with @fontsource packages
   * @see https://fontsource.org/
   */
  css: [
    '@fontsource-variable/inter/index.css',
    '@fontsource-variable/karla/index.css',
  ],
})
