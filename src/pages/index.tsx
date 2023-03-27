import { useCallback, useState } from 'react'
import { getAllPosts } from '../../lib/notionApi'
import Text from '../components/Text'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const getStaticProps = async () => {
  const allPosts = await getAllPosts()
  return {
    allPosts,
  }
}

export default function Home({ allPosts }: any) {
  console.log(allPosts)
  return <Text text={'text'}></Text>
}
