import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Calculator from './Components/ToFromCalc';
import NavBar from './Components/NavBar';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import ToFromCalc from './Components/ToFromCalc';
import HoursCalc from './Components/HoursCalc';
import MinutesCalc from './Components/MinutesCalc';
import BetweenCalc from './Components/BetweenCalc';



function App() {
  return (
    <div>
      <h1>Time Calculator</h1>
      <Router>
            <div className='calculator-board'>
                <h1>This is the board</h1>
                <NavBar />

                <Routes>
                  <Route exact path="/" element={<ToFromCalc/>} />
                  <Route exact path="/hours" element={<HoursCalc/>} />
                  <Route exact path="/minutes" element={<MinutesCalc/>} />
                  <Route exact path="/between" element={<BetweenCalc/>} />
                </Routes>

            </div>
        </Router>
    </div>
  );
}

export default App;
