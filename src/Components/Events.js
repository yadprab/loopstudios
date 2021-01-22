import React from "react";
import { EventHeader } from "./EventHeader";
import { Footer } from "./Footer";
import { EventMain } from "./EventMain";
import { motion } from "framer-motion";
import { PageTransition2 } from "./pagetransition";
const Events = () => {

  return (
    <>
      <motion.section
        initial="out"
        animate="end"
        exit="out"
        variants={PageTransition2}
      >
        <EventHeader />
        <EventMain />
        <Footer />
      </motion.section>
    </>
  );
};

export { Events };
