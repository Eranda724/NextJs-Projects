import React from 'react'
import Link from 'next/link'
import styles from './contact.module.css'

function page() {
  return (
    <>
    <h1>Contact Us</h1>
    <Link href="/" className={styles.link}>back</Link>
    </>
  )
}

export default page