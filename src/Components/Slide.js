import React, {  useState} from "react";
import {Button} from './Button'
const Slide = () => {
  const [slideImg, setSlide] = useState("/images/mobile/image-deep-earth.jpg");





  return (
    <>
      <section className="slider--section">
        <h2>
          centralized solution <br /> oriented benchmark
        </h2>
        <section className={`slider`}>
          <figure>
            <picture>
              <img src={slideImg} alt="" />
            </picture>
          </figure>
          <section className="slideButton--section">
            <Button
              val={`10hr battery`}
              set={setSlide}
              img={`/images/mobile/image-deep-earth.jpg`}
           
            />
            <Button
              val={`10hr battery`}
              set={setSlide}
              img={`/images/mobile/image-curiosity.jpg`}
         
            />
            <Button
              val={`10hr battery`}
              set={setSlide}
              img={`/images/mobile/image-fisheye.jpg`}
            />
            <Button
              val={`10hr battery`}
              set={setSlide}
              img={`/images/mobile/image-grid.jpg`}
            />
          </section>
        </section>
      </section>
    </>
  );
};

export { Slide };
