import { getQuery } from 'h3'
import { queryById } from '../lib/firestore'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event.req)
    const docs = await queryById(query.col as string, query.id as string)

    return { result: docs }
  } catch (error) {
    return { result: [], error: error.message }
  }
})
