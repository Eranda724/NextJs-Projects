import React from 'react'

function page({params}) {
    console.log(params)
    return (
        <>
        <p>
        <div>page not found</div>
        
        <ul>
            {params.not.map((item) => {
                return (
                    <li>{item}</li>
                )
              })}
            </ul>
            </p>
    </>
  )
}

export default page