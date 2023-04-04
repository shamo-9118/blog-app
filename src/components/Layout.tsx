import { FC } from 'react'
import Link from 'next/link'

const Layout: any = ({ children }: any) => {
  return (
    <div className='container w-full h-full p-4 mx-auto max-w-2xl'>
      <Link href='/'>
        <h1 className='text-center text-3xl font-bold my-8'>notion blog📗</h1>
      </Link>
      {children}
    </div>
  )
}
export default Layout
