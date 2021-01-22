import React from "react";
import { Nav } from "./Nav";
import { motion } from "framer-motion";
import { PageTransition } from "./pagetransition";
const Header = () => {
  return (
    <>
      <header className="home--header">
        <Nav />
        <motion.section
          className="hero--text"
          initial="out"
          animate="in"
          exit="out"
          variants={PageTransition}
          transition={{ delay: 0.4 }}
        >
          <h2>Immersive experiences that deliver</h2>
        </motion.section>
      </header>
    </>
  );
};

export { Header };
