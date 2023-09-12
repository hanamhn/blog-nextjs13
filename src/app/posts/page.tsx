import Link from "next/link";

export default async function PostsPage() {
  const res = await fetch('http://localhost:3039/api/posts');
  const { posts } = await res.json();

  return (
    // Styles are for readability; customize as you wish!
    <div>
      <h1>All Blog Posts</h1>
      <hr style={{ width: '220px' }} />
      <div style={{ paddingTop: '40px' }}>
        {posts.map((post: Meta) => (
          <article key={post.id}>
             <Link href={`posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p style={{ paddingBottom: '30px'}}>{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}