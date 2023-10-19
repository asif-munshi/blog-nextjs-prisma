import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Get Post by params
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const id = params.slug

  try {
    const postById = await prisma.post.findUnique({
      where: { id: id },
      include: {
        author: {
          select: { name: true },
        },
      },
    })

    return NextResponse.json({ props: postById }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ data: 'No Posts Found', error }, { status: 400 })
  }
}
