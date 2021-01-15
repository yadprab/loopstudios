import React, { useState } from 'react'
import {Rest} from './Rest'
const Creations=()=> {
  const [seeAll, setAll]= useState(false);
    return (
      <>
        <section className="our--creations">
          <h2>our creations</h2>
          <section className="creations">
            <figure>
              <picture>
                <source
                  media="(min-width:1100px )"
                  srcSet="/images/desktop/image-deep-earth.jpg"
                />
                <img
                  src="/images/mobile/image-deep-earth.jpg"
                  alt="deep earth"
                  loading='lazy'
                />
              </picture>
              <figcaption>
                <h3>deep earth</h3>
              </figcaption>
            </figure>
            <figure>
              <picture>
                <source
                  media="(min-width:1100px )"
                  srcSet="/images/desktop/image-night-arcade.jpg"
                />
                <img
                  src="/images/mobile/image-night-arcade.jpg"
                  alt="Night arcade"
                  loading='lazy'
                />
              </picture>
              <figcaption>
                <h3>Night arcade</h3>
              </figcaption>
            </figure>
            <figure>
              <picture>
                <source
                  media="(min-width:1100px )"
                  srcSet="/images/desktop/image-soccer-team.jpg"
                />
                <img
                  src="/images/mobile/image-soccer-team.jpg"
                  alt=" Soccer team VR"
                  loading='lazy'
                />
              </picture>
              <figcaption>
                <h3> Soccer team VR</h3>
              </figcaption>
            </figure>
            <figure>
              <picture>
                <source
                  media="(min-width:1100px )"
                  srcSet="/images/desktop/image-grid.jpg"
                />
                <img src="/images/mobile/image-grid.jpg" alt="The grid"  loading='lazy'/>
              </picture>
              <figcaption>
                <h3>The grid</h3>
              </figcaption>
            </figure>
            {seeAll&&<Rest/>}
          </section>
          <section className='button--section'>
              <button id='see--all' onClick={()=>{setAll(!seeAll)}}>{seeAll?'seeless':'seeall'}</button>
          </section>
        </section>
      </>
    );
}

export {Creations}
