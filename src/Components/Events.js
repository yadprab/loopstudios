import React from 'react'
import {EventHeader} from './EventHeader'
import {Footer} from './Footer'
import { EventMain } from './EventMain'
 const Events=()=> {
    return (
      <>
        <EventHeader />
        <EventMain/>
        <Footer />
      </>
    );
}

export{ Events}
