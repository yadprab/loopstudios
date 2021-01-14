import React from "react";

const Intro = () => {
  return (
    <>
      <section className="intro--section">
        <section className="img--section">
          <figure>
            <picture>
              <source
                media="(min-width:1100px )"
                srcset="/images/desktop/image-interactive.jpg"
              />
              <img
                src="/images/mobile/image-interactive.jpg"
                alt="interactive vr"
              />
            </picture>
          </figure>
        </section>
        <article>
          <h2> The leader in interactive VR</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </article>
      </section>
    </>
  );
};

export { Intro };
