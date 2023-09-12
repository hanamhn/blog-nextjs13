'use client' 

import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';

type Props = {
    params: {
        id: number
    }
    post: Meta
}

interface postData {
  id: string,
  body: string,
  title: string,
  date: string,
  tags: string[],
}

export default function SinglePost({params}: Props) {
  const [post, setPost] = useState<postData | null>(null);

  const fetchPost = async (id: number) => {
    const res = await fetch(`http://localhost:3039/api/posts/${id}`);
    const {post}: Props  = await res.json();

    post && setPost(post);
  }

  useEffect(() => {
    fetchPost(params.id);
  }, [])
  
  return (
    <div style={{ paddingTop: '20px', paddingLeft: '20px' }}>
      <Link href='/'>Back to home</Link>
      <div style={{ paddingTop: '50px' }}>
        <Suspense fallback={<p>Loading post...</p>}>
        <article>
          <h1 style={{ paddingBottom: '10px' }}>{post?.title}</h1>
          {post?.tags.map((tag, index) => <span style={{ fontWeight: 'lighter' }} key={index}>{tag} | </span>)}
          <br/>
          <p style={{ paddingTop: '10px' }}>{post?.body}</p>
        </article>
        </Suspense>
      </div>
      
    </div>
  )
}