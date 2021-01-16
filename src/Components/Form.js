import React from 'react'

 const Form=({name, title, val})=> {
    return (
        <>
        <section className={name}>
        <h2>{title}</h2>
         <form action="">
             <section className='form--control'>
              <input type="email" name='email' id='email' placeholder='enter your email address'/>
             </section>
             <input type="submit" value={val}  id='submit'/>
         </form>
        </section>
            
        </>
    )
}

export {Form}
