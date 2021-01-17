import React from "react";
import { Nav } from "./Nav";
const Header = () => {

  return (
    <>
      <header className="home--header">
        <Nav />
        <section className="hero--text">
          <h2>Immersive experiences that deliver</h2>
        </section>
      </header>
    </>
  );
};

export { Header };
