
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
 head: {
  
  link: [
    
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Zilla+Slab:400,700'
    }
  ]
},
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/components'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
 
  modules: [
    [
      'storyblok-nuxt',
      {
        accessToken: 'JBT2ep8rgwQVstaJHIqdpAtt',
        cacheProvider: 'memory'
      }
    ]
  ],
  router: {
    middleware: 'languageDetection'
  },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
