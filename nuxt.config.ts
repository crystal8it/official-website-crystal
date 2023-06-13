// https://v3.nuxtjs.org/api/configuration/nuxt.config

const path = require('path')

export default defineNuxtConfig({
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'dist')
    }
  },

  typescript: {
    typeCheck: true
  },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    layoutTransition: false,
    pageTransition: false
  }
})
