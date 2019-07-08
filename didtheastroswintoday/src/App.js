import React from 'react';
import TodaysScore from './components/TodaysScore'
import './App.css';

function App() {
  return (
    <div>
    <h1 className='DTAWT'> Did the Astros Win Today? </h1>
    <TodaysScore />
    </div>
  );
}

export default App;
