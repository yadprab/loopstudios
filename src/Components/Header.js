import React, { useState } from 'react'
import {Overlay} from './Overlay'
 const Header=()=>{

  const [navOpen, setNav] = useState(false);
    return (
      <>
        <header className="home--header">
          <nav>
            <section className="logo--section">
              <a href="/">
                <h1>loopstudios</h1>
              </a>
            </section>
            <ul className="desktop--nav">
              <li>
                <a href="/">home</a>
              </li>
              <li>
                <a href="/">about</a>
              </li>
              <li>
                <a href="/">events</a>
              </li>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
            </ul>
            <section className="icon--section">
              <button id="hamburger--icon" onClick={()=>{setNav(!navOpen)}}>
                <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#FFF" fillRule="evenodd">
                    <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
                  </g>
                </svg>
              </button>
            </section>
          </nav>
          <section className="hero--text">
            <h2>Immersive experiences that deliver</h2>
          </section>

      {navOpen&&<Overlay nav={navOpen} set={setNav}/>}
        </header>
      </>
    );
}

export {Header}
