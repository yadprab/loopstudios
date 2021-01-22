import React from 'react'
import { Link } from "react-router-dom";
const Overlay=({nav, set})=> {
    return (
      <>
        <section className="overlay">
          <nav>
            <section className="logo--section">
              <Link to="/">
                <h1>loopstudios</h1>
              </Link>

              <section className="icon--section">
                <button
                  id="close--icon"
                  onClick={() => {
                    set(!nav);
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                      fill="#FFF"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </section>
            </section>

            <ul className="mobile--nav">
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    set(!nav);
                  }}
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => {
                    set(!nav);
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  onClick={() => {
                    set(!nav);
                  }}
                >
                  Events
                </Link>
              </li>
            
              <li>
                <Link
                  to="/supports"
                  onClick={() => {
                    set(!nav);
                  }}
                >
                  supports
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </>
    );
}

export  {Overlay}
