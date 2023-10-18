'use client'

import Post from '@/components/Post'
import { PostProps } from '@/types/postTypes'

function getPost() {
  const feed = [
    {
      id: '1',
      title: 'Prisma is the perfect ORM for Next.js',
      content:
        '[Prisma](https://github.com/prisma/prisma) and Next.js go great together!',
      published: false,
      author: {
        name: 'Asif Munshi',
        email: 'asif@gmail.com',
      },
    },
  ]
  return {
    props: { feed },
    revalidate: 10,
  }
}

export default function Home() {
  const { props } = getPost()

  return (
    <>
      <div className="page">
        <h1 className="text-2xl font-bold">Public Feed</h1>
        <main>
          {props.feed.map((post) => (
            <div
              key={post.id}
              className="mt-8 bg-white shadow-md transition duration-100 ease-in hover:cursor-pointer hover:shadow-lg hover:shadow-[#aaa]"
            >
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
    </>
  )
}
