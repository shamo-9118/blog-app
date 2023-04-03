import { Client } from '@notionhq/client'
import Text from '../components/Text'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const getAllPosts = async () => {
  if (!process.env.NOTION_DATABASE_ID) return
  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  })
  return posts.results
}

export const getStaticProps = async () => {
  const allPosts = await getAllPosts()
  return {
    props: {
      allPosts,
    },
  }
}

export default function Home({ allPosts }: any) {
  const postsData = allPosts.map((post: any) => {
    const getTags = (tags: any) => {
      const allTags = tags.map((tag: any) => {
        return tag.name
      })
      return allTags
    }
    return {
      id: post.id,
      date: post.properties.投稿日.date.start,
      slug: post.properties.スラグ.rich_text[0].plain_text,
      tag: getTags(post.properties.タグ.multi_select),
      title: post.properties.タイトル.title[0].plain_text,
      text: post.properties.テキスト.rich_text[0].plain_text,
    }
  })

  return <Text text={'text'}></Text>
}
