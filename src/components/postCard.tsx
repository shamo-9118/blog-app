import { FC } from 'react'

type Props = {
  id: string
  date: string
  slug: string
  tags: string[]
  title: string
  text: string
}

const PostCard: FC<any> = (props) => {
  console.log(props.postData.tag)
  return (
    <section className='max-w-2xl bg-zinc-700 text-white rounded-md flex p-7'>
      <h2 className='text-xl'>{props.postData.title}</h2>
      <div className='flex gap-3 mx-3'>
        {props.postData.tags.map((tag: string, index: number) => (
          <div
            className='bg-zinc-400 px-2 rounded-2xl text-sm self-center'
            key={index}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className='flex-1 text-end'>{props.postData.date}</div>
    </section>
  )
}

export default PostCard
