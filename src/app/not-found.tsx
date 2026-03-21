import Link from 'next/link'
import styles from './404.module.css'
export default function NotFound() {
  return (
    
    <div className={styles["container"]}>
      <h1 className={styles["title"]}>404</h1>
      <h2 className={styles["subtitle"]}>Page Not Found</h2>
      <p className={styles["description"]}>Wow! Your a creative person. Welcome the the webpage I never made.</p>
      <p className={styles["description"]}>(In case your an alien or are just new to the internet, a 404 error shows up when you type in an invalaid url)</p>
      <p className={styles["description"]}>But, now that your here, why not</p>
      <Link href="/" className={styles["link"]}>Visit My Home Page</Link>
    </div>
  )
}