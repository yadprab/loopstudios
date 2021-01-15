import React from 'react'
import {Card} from './Card'
 const Teams=()=> {
    return (
      <>
        <section className="teams--section">
          <section className="cards--section">
            <h2>meet our team</h2>

            <ul>
              <Card
                img={`/images/avatar/albert.jpg`}
                name={`Albert Flores`}
                title={`International Branding Agent`}
              />
              <Card
                img={`/images/avatar/flyod.jpg`}
                name={`Floyd Miles`}
                title={`Future Web Manager`}
              />
              <Card
                img={`/images/avatar/jenny.jpg`}
                name={`Jenny Wilson`}
                title={`Product Mobility Representative`}
              />
              <Card
                img={`/images/avatar/thersa.jpg`}
                name={`Theresa Webb`}
                title={`Customer Factors Architect`}
              />
              <Card
                img={`/images/avatar/annette.jpg`}
                name={`Annette Black`}
                title={`Dynamic Security Executive`}
              />
              <Card
                img={`/images/avatar/jerome.jpg`}
                name={`Jerome Bell`}
                title={`Internal Metrics Producer`}
              />
            </ul>
          </section>
        </section>
      </>
    );
}

export {Teams}
