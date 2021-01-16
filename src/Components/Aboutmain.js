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
        <Form name={`subscription`} title={`be a part of the future`} val={`subscribe`}/>
        <section className="banner--section"></section>
        <Project />
      </main>
    </>
  );
};

export { AboutMain };
