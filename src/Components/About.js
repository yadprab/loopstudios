import React from 'react'
import {AboutHeader} from './AboutHeader'
import {AboutMain} from './Aboutmain'
import { motion } from "framer-motion";
import {Footer} from './Footer'
import { PageTransition2 } from "./pagetransition";
const About=()=> {
    return (
      <>
        <motion.section
          initial="out"
          animate="end"
          exit="out"
          variants={PageTransition2}
        >
          <AboutHeader />
          <AboutMain />
          <Footer />
        </motion.section>
      </>
    );
}

export { About}
