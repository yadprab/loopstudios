import React, { useState } from "react";
import { Answer } from "./Answer";
import { Plus } from "./Plus";
import { Minus } from "./Minus";
const Answers = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="content">
        <h3>Lorem ipsum dolor sit amet?</h3>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? <Minus /> : <Plus />}
        </button>
        {show && <Answer />}
      </section>
    </>
  );
};

export { Answers };
