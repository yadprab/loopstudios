import React from 'react'

const Card=({img, name, title})=> {
    return (
        <>
        <li>
          <section className='card'>
             <section className='img--section'>
              <img src={img} alt={name} loading='lazy'/>
             </section>
             <article>
                 <h3>{name}</h3>
                 <p>{title}</p>
             </article>
          </section>  
        </li>    
        </>
    )
}

export {Card}
