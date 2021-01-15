import React from "react";
import {AboutIntro} from './Aboutintro'
import {Teams} from './Teams'
import { Form } from "./Form";
import { Project } from "./Project";
const AboutMain = () => {
  return (
    <>
      <main className="about--main">
        <AboutIntro />
        <Teams />
        <Form />
        <section className="banner--section"></section>
        <Project />
      </main>
    </>
  );
};

export { AboutMain };
