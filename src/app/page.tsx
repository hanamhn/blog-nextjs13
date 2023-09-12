import PostsPage from './posts/page'
import styles from './page.module.css'

export default function Home() {
  return (
     <main className={styles.main}>
      <PostsPage />
    </main>
  )
}
