import React from 'react'
import Link from 'next/link';

function page(params) {
  return (
    <>
    <div>teacher item {params.teaid}</div>
    <div>
    <Link href="/">Back to home</Link>
    </div>
    </>
  )
}

export default page