import React from 'react'
import {Nav} from './Nav'
import {Accordion} from './Acoordion'
import { motion } from "framer-motion";
import { PageTransition2 } from "./pagetransition";
const Supports=()=> {


    return (
      <>
        <motion.section
          className="supports--container"
          initial="out"
          animate="end"
          exit="out"
          variants={PageTransition2}
        >
          <Nav />
          <Accordion />
        </motion.section>
      </>
    );
}

export  {Supports}
