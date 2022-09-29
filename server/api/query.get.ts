import { getQuery } from 'h3'
// import { queryByCollection } from '../lib/firestore'
import { queryByParagraphsId } from '../lib/firestore'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event.req)
    const docs = await queryByParagraphsId(query.id as string)

    return { result: docs }
  } catch (error) {
    return { result: [], error: error.message }
  }
})
