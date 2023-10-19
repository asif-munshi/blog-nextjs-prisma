'use client'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import { getPostById } from '@/lib/post'

export default function POST() {
  const params = useParams()
  const { id } = params
  const postId = id.toString()

  const { data, isLoading } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPostById(postId),
  })

  if (isLoading || !data) return <main>Loading...</main>
  const props = data.props

  let title = props.title
  if (!props.published) {
    title = `${title} (Draft)`
  }

  return (
    <>
      <div className="bg-white p-8">
        <h2>{title}</h2>
        <p>By {props?.author?.name || 'Unknown author'}</p>
        <Markdown rehypePlugins={[rehypeHighlight]}>{props.content}</Markdown>
      </div>
    </>
  )
}
