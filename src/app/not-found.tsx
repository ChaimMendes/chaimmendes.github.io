import Link from 'next/link'
import styles from './404.module.css'
export default function NotFound() {
  return (
    
    <div className={styles["container"]}>
      <h1 className={styles["title"]}>404</h1>
      <h2 className={styles["subtitle"]}>Page Not Found</h2>
      <p className={styles["description"]}>Wow! You are a creative person. Welcome to a webpage I never made.</p>
      <p className={styles["description"]}>(In case you are an alien or just new to the internet, a 404 error shows up when you type in an url that goes, nowhere. It's a bit like a sending a postcard to New Fantasy, LA.)</p>
      <hr className={styles["line"]}/>
      <p className={styles["description"]}>But, now that you are here, why not</p>
      <Link href="/" className={styles["link"]}>Visit My Home Page</Link>
    </div>
  )
}