// https://v3.nuxtjs.org/api/configuration/nuxt.config

import { getQuery } from 'h3'
import { queryByCollection } from './server/lib/firestore'

const Fetch = async (event) => {
  try {
    const query = getQuery(event)
    const docs = await queryByCollection(query.col as string)

    return { result: docs }
  } catch (error) {
    return { result: [], error: error.message }
  }
}

export default defineNuxtConfig({
  hooks: {
    async 'nitro:config'(nitroConfig) {
      if (nitroConfig.dev) {
        return
      }
      const { result } = await Fetch(`paragraphs`)

      result.forEach((data) => {
        const d = {
          route: '/paragraph-group/' + data.id,
          payload: data.id
        }
        nitroConfig.prerender.routes.push(d.route)
      })
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
