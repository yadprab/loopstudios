import React from 'react'

const Countdown=({title, value})=> {
    return (
      <>
        <section className="count">
          <div>
            <p id={title}>{value}</p>
          </div>
          <div>
            
          </div>
          <p className='type'>{title}</p>
        </section>
      </>
    );
}

export { Countdown}
