// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon'],
  css: [
    // Load a Node.js module directly (here it's a Sass file).
    '@/assets/css/global.scss'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  typescript: {
    strict: true
  }
})
