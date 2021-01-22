import{ React, useState} from 'react'
import { Link } from "react-router-dom";
import { Overlay } from "./Overlay";
import { motion } from "framer-motion";
const Nav=()=> {
      const [navOpen, setNav] = useState(false);
        const PageTransition = {
          in: {
            opacity: 1,
            scale: 1,
          },
          out: {
            opacity: 0,
            scale: 0,
          },
        };
    return (
      <>
        {navOpen && <Overlay nav={navOpen} set={setNav} />}
        <nav>
          <motion.section
            className="logo--section"
            initial="out"
            animate="in"
            exit="out"
            variants={PageTransition}
            transition={{ delay: 0.2 }}
          >
            <Link to="/">
              <h1>loopstudios</h1>
            </Link>
          </motion.section>
          <motion.ul
            className="desktop--nav"
         
            initial="out"
            animate="in"
            exit="out"
            variants={PageTransition}
            transition={{ delay: 0.2 }}
          >
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
              <Link to="/supports">supports</Link>
            </li>
          </motion.ul>
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
