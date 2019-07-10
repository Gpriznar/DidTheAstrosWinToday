import React from 'react';
import TodaysScore from './components/TodaysScore'
import './App.css';

function App() {
  return (
    <div className='mainpage'>
    <h1 className='DTAWT'> Did the Astros Win Today? </h1>
    <div className="bar-zero"><TodaysScore /></div>
    <div className="bar-one">1</div>
    <div className="bar-two"></div>
    <div className="bar-three">2</div>
    <div className="bar-four">2</div>
    <div className="bar-five"></div>
    <div className="bar-six">1</div>
    <div className="bar-seven">2</div>
    <div className="bar-eight">2</div>
    <div className="bar-nine">2</div>
    <div className="score-display"> </div>

    </div>
  );
}

export default App;
