// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon','@nuxt/content'],
  css: [
    // Load a Node.js module directly (here it's a Sass file).
    '@/assets/css/global.scss'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { hid: 'description', name: 'description', content: 'Eral Keskinkurt Full Stack Developer' },
        { hid: 'keywords', name: 'keywords', content: 'Eral Keskinkurt, Full Stack Developer, Software Developer, Backend Developer, Frontend Developer, Web Designer, Web Developer, Programmer, Coding' },
        { hid: 'author', name: 'author', content: 'Eral Keskinkurt' },
      ],
      title: 'Eral Keskinkurt',
    }
  },
  typescript: {
    strict: true
  },
  content: {

  }
})