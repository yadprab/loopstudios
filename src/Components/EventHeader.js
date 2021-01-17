import React from "react";
import {Nav} from './Nav'
const EventHeader = () => {

  return (
    <>
      <header className="events--header">
         <Nav />
        <section className="hero--text">
          <h2>integrated </h2>
          <h2>extend </h2>
          <h2>functionalities</h2>
        </section>
         <p>for 4 weeks</p>
     
      </header>
    </>
  );
};

export { EventHeader };
