import React from 'react'
import Link from 'next/link';

function page() {

    const teachers= [
        {
            id:1,
            name:"saman",
            age:30,
            subject:"maths"
        },
        {
            id:2,
            name:"kamal",
            age:30,
            subject:"maths"
        },
        {
            id:3,
            name:"nimal",
            age:30,
            subject:"maths"
        },
    ]
  return (
    <>
    <div>Teacher List</div>

    <ul>
        {
            teachers.map((teacher)=>(
                <li key={teacher.id}>
                    <Link href={`/provider/teacher/${teacher.id}`}>{teacher.name}</Link>
                </li>
            ))
        }
    </ul>

    </>
  )
}

export default page