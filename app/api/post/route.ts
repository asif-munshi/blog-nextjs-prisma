import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Get All Posts
export async function GET() {
  try {
    const allPosts = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: {
          select: { name: true },
        },
      },
    })

    return NextResponse.json(allPosts, { status: 200 })
  } catch (error) {
    return NextResponse.json({ data: 'No Posts Found', error }, { status: 400 })
  }
}
