import React from 'react'
import { Event } from "./Event";
import {Organizer} from './Organizer'
 const EventMain=()=> {
    return (
        <>
         <main className='event--main'>
          <Event />
           <Organizer />
           <section className='banner--section event--banner'></section>
         </main>   
        </>
    )
}

export {EventMain}
