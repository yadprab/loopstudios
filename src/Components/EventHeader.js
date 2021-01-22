import React from "react";
import {Nav} from './Nav'
import {PageTransition}from './pagetransition';
import { motion } from "framer-motion";
const EventHeader = () => {

  return (
    <>
      <header className="events--header">
        <Nav />
        <motion.section
          className="hero--text"
          initial="out"
          animate="in"
          exit="out"
          variants={PageTransition}
          transition={{ delay: 0.4 }}
        >
          <h2>integrated </h2>
          <h2>extend </h2>
          <h2>functionalities</h2>
        </motion.section>
        <p>for 4 weeks</p>
      </header>
    </>
  );
};

export { EventHeader };
