import{ React, useState} from 'react'
import { Link } from "react-router-dom";
import { Overlay } from "./Overlay";
const Nav=()=> {
      const [navOpen, setNav] = useState(false);
    return (
      <>
        {navOpen && <Overlay nav={navOpen} set={setNav} />}
        <nav>
          <section className="logo--section">
            <Link to="/">
              <h1>loopstudios</h1>
            </Link>
          </section>
          <ul className="desktop--nav">
            <li>
              <Link
                to="/"
                onClick={() => {
                  setNav(!navOpen);
                }}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => {
                  setNav(!navOpen);
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                onClick={() => {
                  setNav(!navOpen);
                }}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={() => {
                  setNav(!navOpen);
                }}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/supports"
                onClick={() => {
                  setNav(!navOpen);
                }}
              >
                supports
              </Link>
            </li>
          </ul>
          <section className="icon--section">
            <button
              id="hamburger--icon"
              onClick={() => {
                setNav(!navOpen);
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
      </>
    );
}

export { Nav}
