import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className='navigation'><div className='header'>

      <h1>
        Home Page
      </h1>
      </div>
      <div>
      <ul>
        <li>
          <Link href="/login" className={styles.link}>login page</Link>
        </li>
        <li>
          <Link href="/register" className={styles.link}>Register page</Link>
        </li>
        </ul>
        </div>
        </div>
        </>
  )
}
