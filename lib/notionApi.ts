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
      property: 'Slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  })
}
