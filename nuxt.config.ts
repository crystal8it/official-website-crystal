// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    layoutTransition: false,
    pageTransition: false
  }
})
