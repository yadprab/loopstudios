import React from "react";
import { Nav } from "./Nav";
const ProHeader = () => {
  return (
    <>
      <header className="products--header">
        <Nav />
        <section className="hero--text">
          <h2>maximize</h2>
          <p>version 2.0</p>
        </section>
      </header>
    </>
  );
};

export { ProHeader };
