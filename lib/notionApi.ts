import { Client } from '@notionhq/client'

type Post = {
  id: any
}

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getAllPosts = async () => {
  if (!process.env.NOTION_DATABASE_ID) return

  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    page_size: 10,
  })

  const allPosts = posts.results
  allPosts.map((post) => {
    // console.log(post.properties.タイトル)
    getAllPageMetaData(post)
  })
  return allPosts
}

const getAllPageMetaData = (post: any) => {
  return {
    // id: post.id,
    // title: post.properties.タイトル.title[0].plain_text,
    // description: post.properties.Description.rich_text[0].plain_text,
    // date: post.properties.Date.date.start,
    // slug: post.properties.Slug.rich_text[0].plain_text,
  }
}
// id,
// title,
// description
// data
// slug
