import React, { useState } from "react";
import { Overlay } from "./Overlay";
import { Link } from "react-router-dom";
const EventHeader = () => {
  const [navOpenEvent, setNavEvent] = useState(false);
  return (
    <>
      <header className="events--header">
        <nav>
          <section className="logo--section">
            <Link to="/">
              <h1>loopstudios</h1>
            </Link>
          </section>
          <ul className="desktop--nav">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/supports">supports</Link>
            </li>
          </ul>
          <section className="icon--section">
            <button
              id="hamburger--icon"
              onClick={() => {
                setNavEvent(!navOpenEvent);
              }}
            >
              <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FFF" fillRule="evenodd">
                  <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
                </g>
              </svg>
            </button>
          </section>
        </nav>
        <section className="hero--text">
          <h2>integrated </h2>
          <h2>extend </h2>
          <h2>functionalities</h2>
        </section>
         <p>for 4 weeks</p>
        {navOpenEvent && <Overlay nav={navOpenEvent} set={setNavEvent} />}
      </header>
    </>
  );
};

export { EventHeader };
