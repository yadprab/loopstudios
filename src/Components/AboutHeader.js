import React from "react";
import {Nav} from './Nav';
import { PageTransition } from "./pagetransition";
import { motion } from "framer-motion";
const AboutHeader = () => {

  return (
    <>
      <header className="about--header">
        <Nav />
        <motion.section
          className="hero--text"
          initial="out"
          animate="in"
          exit="out"
          variants={PageTransition}
          transition={{ delay: 0.4 }}
        >
          <h2>feel the realness</h2>
        </motion.section>
      </header>
    </>
  );
};

export { AboutHeader };
