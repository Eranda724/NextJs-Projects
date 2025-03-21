import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        <Link href='signup'>Signup Page</Link><br />
        <Link href='login'>Login Page</Link>
      </p>
    </>
  );
}
