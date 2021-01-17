import React, { useEffect } from 'react'
import {Nav} from './Nav'
import {Accordion} from './Acoordion'
const Supports=()=> {


    return (
      <>
        <section className="supports--container">
          <Nav />
          <Accordion />
        </section>
      </>
    );
}

export  {Supports}
