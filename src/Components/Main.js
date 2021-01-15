import React from 'react';
import {Intro} from './Intro';
import {Creations} from './Creations'
const Main=()=> {
    return (
      <>
        <main className='home--main'>
          <Intro />
          <Creations />
        </main>
      </>
    );
}

export{ Main}
