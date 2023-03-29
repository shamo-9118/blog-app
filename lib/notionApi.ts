import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getAllPosts = async () => {
  if (!process.env.NOTION_DATABASE_ID) return

  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    page_size: 10,
  })
  console.log(posts)

  const allPosts = posts.results
  return allPosts
}
