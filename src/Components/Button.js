import React from 'react'

const Button=({val, set, img})=>{
  
    return (
        <>
        <button onClick={()=>{set(img)}} >
         {val}
        </button>
            
        </>
    )
}

export  {Button}
