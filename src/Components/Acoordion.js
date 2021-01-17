import React from 'react'
import {Answers} from './Answers'
const Accordion=()=> {
    return (
      <>
        <section className="accordion--container">
          <article>
            <h2>supports</h2>
            <p>answers for your queries</p>
          </article>
          <section className="answers--section">
            <Answers />
            <Answers />
            <Answers />
            <Answers />
            <Answers />
          </section>
        </section>
      </>
    );
}

export{ Accordion}
