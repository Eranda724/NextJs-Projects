import Image from "next/image";
import Link from "next/link";
import styles from './page.module.css'
import { Spectral } from "next/font/google";
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
          <Link href="/" className={styles.link}>Home</Link>
        </li>
        <li>
          <Link href="/provider/doctor" className={styles.link}>Doctor</Link>
        </li>
        <li>
          <Link href="/about" className={styles.link}>About</Link>
        </li>
        <li>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </li>
        <li>
          <Link href="/provider/teacher" className={styles.link}>Teacher</Link>
        </li>
        <Link href="https://nextjs.org/" target="_blank" id={styles.specialLink}>NextJs website</Link> 
      </ul>

      </div>
      
    </div>
    </>
  )
}
