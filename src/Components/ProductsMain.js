import React from 'react'
import {Archi} from './Archi'
import {Slide} from './Slide'
import {Multi} from './Multi'


const ProductsMain=()=> {
    return (
      <>
        <main className="products--main">
          <Archi />
          <Slide />
          <Multi />
        </main>
      </>
    );
}

export { ProductsMain}
