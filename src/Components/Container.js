import React from 'react'
import {Header} from './Header';
import {Main} from './Main'
import {Footer} from './Footer'
import { motion } from "framer-motion";
import {PageTransition2} from './pagetransition'
 const Container=()=> {
    return (
      <>
        <motion.section
          initial='out'
          animate='end'
          exit='out'
          variants={PageTransition2}
        >
          <Header />
          <Main />
          <Footer />
        </motion.section>
      </>
    );
}

export {Container}
