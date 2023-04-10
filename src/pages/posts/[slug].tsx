import Head from 'next/head'
import { useRouter } from 'next/router'
import { getSinglePost } from '../../../lib/notionApi'

//オブジェクト定義して直書きだけど、useRouter使って動的にパスを生成するようにする
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
  console.log(post)
  const router = useRouter()
  console.log(router.query.slug)

  return (
    <>
      <Head>
        <title>title</title>
      </Head>
      <div>{router.query.slug}</div>
    </>
  )
}
export default PostPage
