import React from 'react'

const Rest=()=> {
    return (
      <>
        <figure>
          <picture>
            <source
              media="(min-width:901px )"
              srcSet="/images/desktop/image-curiosity.jpg"
            />
            <img src="/images/mobile/image-curiosity.jpg" alt="The curiosity" loading='lazy' />
          </picture>
          <figcaption>
            <h3>The curiosity</h3>
          </figcaption>
        </figure>
        <figure>
          <picture>
            <source
              media="(min-width:901px )"
              srcSet="/images/desktop/image-fisheye.jpg"
            />
            <img src="/images/mobile/image-fisheye.jpg" alt="fisheye"  loading='lazy'/>
          </picture>
          <figcaption>
            <h3> Make it fisheye</h3>
          </figcaption>
        </figure>
        <figure>
          <picture>
            <source
              media="(min-width:901px )"
              srcSet="/images/desktop/image-from-above.jpg"
            />
            <img src="/images/mobile/image-from-above.jpg" alt="above" loading='lazy' />
          </picture>
          <figcaption>
            <h3>From up above VR</h3>
          </figcaption>
        </figure>
        <figure>
          <picture>
            <source
              media="(min-width:901px )"
              srcSet="/images/desktop/image-pocket-borealis.jpg"
            />
            <img
              src="/images/mobile/image-pocket-borealis.jpg"
              alt="  Pocket borealis"
              loading='lazy'
            />
          </picture>
          <figcaption>
            <h3>Pocket borealis</h3>
          </figcaption>
        </figure>
      </>
    );
}

export {Rest}
