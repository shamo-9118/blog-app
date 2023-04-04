import Head from 'next/head'
import { useRouter } from 'next/router'

//このページのslugを元にnotionからデータを取得する
//notinoApi.tsで関数を準備してそれにslugを渡して1ページ分の記事を取得する

const PostPage = () => {
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
