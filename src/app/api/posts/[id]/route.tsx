import { NextResponse } from 'next/server'

type Props = {
    params: {
        id: number
    }
}

export async function GET(request: Request, { params }: Props) {
  const { id } = params;
  const res = await fetch(`https://dummyjson.com/posts/${id}`, { next: {revalidate: 60} });
  const post = await res.json();

  return NextResponse.json({ post });
}