'use client'

import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import { useRouter } from 'next/navigation'
import { PostProps } from '@/types/postTypes'

export default function Post({ post }: { post: PostProps }) {
  const router = useRouter()
  const authorName = post.author ? post.author.name : 'Unknown author'

  return (
    <div
      onClick={() => router.push(`/post/${post.id}`)}
      className="p-8 text-inherit"
    >
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <Markdown rehypePlugins={[rehypeHighlight]}>{post.content}</Markdown>
    </div>
  )
}
