import Head from 'next/head'
import { useRouter } from 'next/router'
import { getSinglePost } from '../../../lib/notionApi'

// オブジェクト定義して直書きだけど、useRouter使って動的にパスを生成するようにする
export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'post01' } },
      { params: { slug: 'post02' } },
      { params: { slug: 'post03' } },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }: any) => {
  const post = await getSinglePost(params.slug)
  return {
    props: {
      post,
    },
  }
}

const PostPage = ({ post }: any) => {
  const router = useRouter()
  const slug = router.query.slug
  const title = post.page.properties['タイトル'].title[0].plain_text
  const posted_date = post.page.properties["投稿日"].date.start
   

  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>
      <h2 className='text-2xl border-b-stone-500 border-b-2 w-1/3'>{title}</h2>
      <span className='text-sm text-stone-400 mt-2'>{posted_date}</span>
    </>
  )
}
export default PostPage
