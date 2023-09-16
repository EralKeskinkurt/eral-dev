// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    // Load a Node.js module directly (here it's a Sass file).
    '@/assets/css/global.scss'
  ]
})
