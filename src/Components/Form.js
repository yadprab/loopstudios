import React from 'react'

 const Form=()=> {
    return (
        <>
        <section className='subscription'>
        <h2>be a part of the future</h2>
         <form action="">
             <section className='form--control'>
              <input type="email" name='email' id='email' placeholder='enter your email address'/>
             </section>
             <input type="submit" value="subscribe"  id='submit'/>
         </form>
        </section>
            
        </>
    )
}

export {Form}
