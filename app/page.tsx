'use client'

import { useQuery } from '@tanstack/react-query'
import Post from '@/components/Post'
import { getAllPosts } from '@/lib/post'

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: getAllPosts,
  })

  if (isLoading || !data) return <main>Loading...</main>

  return (
    <>
      <div className="page">
        <h1 className="text-2xl font-bold">Public Feed</h1>
        <main>
          {data.map((post) => (
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
