import React from 'react'

const EventCards=({img, EveName, week})=> {
    return (
      <>
        <li>
          <section className="eve--cards">
            <figure>
              <img src={img} alt={EveName} />
              <figcaption>
                <h3>{week}</h3>
                <p>{EveName}</p>
              </figcaption>
            </figure>
          </section>
        </li>
      </>
    );
}

export{ EventCards}
