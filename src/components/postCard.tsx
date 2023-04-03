import { FC } from 'react'

type Props = {
  id: string
  date: string
  slug: string
  tag: string[]
  title: string
  text: string
}

const PostCard: FC<any> = (props) => {
  console.log(props)
  return (
    <section>
      <h2>{props.postData.title}</h2>
      <div>{props.postData.date}</div>
      <div>{props.postData.text}</div>
    </section>
  )
}

export default PostCard
