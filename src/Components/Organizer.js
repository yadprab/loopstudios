import React from "react";
import { EventCards } from "./EventCards";
const Organizer = () => {
  return (
    <>
      <section className="event--details">
        <section className="event--org">
          <figure>
            <img src="/images/avatar/LEO.jpg" alt="event organizer" />

            <figcaption>
              <h2>
                leo <span>harvey</span>
              </h2>
            </figcaption>
          </figure>
          <p>event manager</p>
        </section>
        <section className="events--cards">
          <ul>
            <EventCards
              week={`week 1`}
              EveName={`Equirectangular`}
              img={`/images/cards/card1.jpg`}
            />
            <EventCards
              week={`week 2`}
              EveName={`Locomotion testing`}
              img={`/images/cards/card2.jpg`}
            />
            <EventCards
              week={`week 3`}
              EveName={`Gaze-based interaction`}
              img={`/images/cards/card3.jpg`}
            />
            <EventCards
              week={`week 4`}
              EveName={`mixed reality`}
              img={`/images/cards/card4.jpg`}
            />
          </ul>
        </section>
      </section>
    </>
  );
};

export { Organizer };
