import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getAllPosts = async () => {
  if (!process.env.NOTION_DATABASE_ID) return
  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  })
  return posts.results
}

export const getSinglePost = async (slug: any) => {
  if (!process.env.NOTION_DATABASE_ID) return
  const post = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: 'スラグ',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  })
  const page = post.results[0]
  return { post, page }
}
