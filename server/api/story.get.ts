export type storyData = {
  id: string
  title: string
  content: string
  banner: {
    src: string
    describe: string
  }
}

const data: storyData[] = [
  {
    id: '1',
    title: '財團法人方興中馬匹輔學健康社福基金會-募資頁面',
    content: '文章內容',
    banner: { src: '/img/thrct/banner.png', describe: '希望馬場,樂捐募資' }
  },
  {
    id: '2',
    title: 'ilens',
    content: '文章內容',
    banner: { src: '/img/thrct/banner.png', describe: '123' }
  }
]

export default defineEventHandler(async (event) => {
  try {
    const query = useQuery(event)
    const [queryData] = data.filter((obj) => obj.id === query.id)

    console.log(queryData)

    return queryData
  } catch (error) {
    return { result: [], error: error.message }
  }
})
