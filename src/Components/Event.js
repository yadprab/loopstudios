import React, { useState, useRef, useEffect} from 'react' 
import {Countdown} from './Countdown'
import {Form} from './Form'
 const Event=()=> {
 
  const [timerDays, setTimerDays]= useState('00');
   
  const [timerHr, setTimerHr]= useState('00');

   
  const [timerMin, setTimerMin]= useState('00');

 
  const [timerSec, setTimerSec]= useState('00');


let interval = useRef();

  const timer = ()=>{
    const countDownDate = new Date("Apr 13 ,2021 00:00:00  ").getTime();

    interval = setTimeout(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
       const hours = Math.floor(
         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
       );
       const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       const sec = Math.floor((distance % (1000 * 60)) / 1000);   


       if (distance<0) {
         clearInterval(interval.current);
       }else{
         setTimerDays(days);
         setTimerHr(hours);
         setTimerMin(min);
         setTimerSec(sec)
       }
      
    }, 1000)
    
  } 

  useEffect(() => {
   timer()
    return () => {
      clearInterval(interval.current)
    }
  }, )
    return (
      <>
        <section className="events--info">
          <h2>starts at</h2>
          <article>
            <p id='venue'>Tue Apr 13 2021</p>
            <p>Lake Jada</p>
            <p>Tonga</p>
          </article>
          <section className="count--down">
            <Countdown title={`days`}  value={timerDays}/>
            <Countdown title={`hours`}  value={timerHr}/>
            <Countdown title={`min`} value={timerMin}/>
            <Countdown title={`sec`} value={timerSec}/>
          </section>
         <Form name={`invitation`} title={``} val={`get invitation`} />
        </section>
      </>
    );
}

export { Event}
