'use client'

import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import { PostProps } from '@/types/postTypes'

function getPost() {
  const post = {
    id: '1',
    title: 'Prisma is the perfect ORM for Next.js',
    content:
      '[Prisma](https://github.com/prisma/prisma) and Next.js go great together!',
    published: false,
    author: {
      name: 'Asif Munshi',
      email: 'asif@gmail.com',
    },
  }
  return {
    props: post,
  }
}

export default function POST() {
  const { props } = getPost()
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
