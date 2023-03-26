import { AppProps } from 'next/app'
import { FC } from 'react'

type text = { text: string }

const Text: FC<text> = ({ text }) => {
  return <div className={'w-20 h-20 bg-slate-500 rounded-full'}>{text}</div>
}

export default Text
