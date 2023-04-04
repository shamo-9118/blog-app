import Link from 'next/link'

import { getAllPosts } from '../../lib/notionApi'

import { Client } from '@notionhq/client'
import PostCard from '../components/postCard'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

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
      tags: getTags(post.properties.タグ.multi_select),
      title: post.properties.タイトル.title[0].plain_text,
      text: post.properties.テキスト.rich_text[0].plain_text,
    }
  })
  return (
    <div className='grid gap-5'>
      {postsData.map((postData: any) => (
        <Link key={postData.id} href={`/posts/${postData.slug}`}>
          <PostCard postData={postData}></PostCard>
        </Link>
      ))}
    </div>
  )
}
