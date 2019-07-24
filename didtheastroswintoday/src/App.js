import React from 'react';
import TodaysGame from './components/TodaysGame'
import './App.css';
import Breakpoint from 'react-socks'

function App() {
  return (
    <div className='mainpage'>
    <Breakpoint large up>
       <h1 className='desktopDTAWT'> Did the Astros Win Today? </h1>
       <div className="bar-zero"></div>
      <div className="bar-one"></div>
      <div className="bar-two"><TodaysGame /></div>
      <div className="bar-three"></div>
      <div className="bar-four"></div>
      <div className="bar-five"></div>
      <div className="bar-six"></div>
      <div className="bar-seven"></div>
      <div className="bar-eight"></div>
      <div className="bar-nine"></div>
      <div className="bar-one"></div>
      <div className="bar-two"></div>
      <div className="bar-three"></div>
      <div className="bar-four"></div>
      <div className="bar-five"></div>
    </Breakpoint>
    <Breakpoint medium only>
       <h1 className='tabletDTAWT'> Did the Astros Win Today? </h1>
       <div className="bar-zero"></div>
       <div className="bar-one"></div>
       <div className="bar-two"><TodaysGame /></div>
       <div className="bar-three"></div>
       <div className="bar-four"></div>
       <div className="bar-five"></div>
       <div className="bar-six"></div>
       <div className="bar-seven"></div>
       <div className="bar-eight"></div>
       <div className="bar-nine"></div>
       <div className="bar-zero"></div>
    </Breakpoint>
    <Breakpoint small down>
       <h1 className='mobileDTAWT'> Did the Astros Win Today? </h1>
       <div className="mobile-bar-zero"></div>
       <div className="mobile-bar-one"><TodaysGame /></div>
       <div className="mobile-bar-two"></div>
       <div className="mobile-bar-three"></div>
       <div className="mobile-bar-four"></div>
       <div className="mobile-bar-five"></div>
       <div className="mobile-bar-six"></div>
       <div className="mobile-bar-seven"></div>
       <div className="mobile-bar-zero"></div>
    </Breakpoint>

  
    </div>
  );
}

export default App;
