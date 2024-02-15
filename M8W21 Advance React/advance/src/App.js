import logo from './logo.svg';
import './App.css';
import Styled from './components/Styled';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Redirect from './components/Redirect';
import Parent from './components/context/Parent';
import CounterContext from './components/context/CounterContext';
import { useState } from 'react';
import Ref from './components/Ref';
import ContinuousSlider from './components/Slider';
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function App() {
  const userId = window.sessionStorage.getItem('userId')
  const newUserId = window.localStorage.getItem('newUserId')
  console.log(userId);
  console.log(newUserId);

  const [counter, setCounter ] = useState(0);
  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  const values = {
    counter, 
    increment,
    decrement
  }

  return (
    <div className="App">
      {/* <Styled /> */}
      <CounterContext.Provider value={values}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<h1>Wrong page</h1>} />
            <Route path="/styled" element={<Styled />} />
            <Route path="/styled/*" element={<Redirect />} />
            
            <Route path="/" element={
              <div>
                <FormGroup>
                  <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                  <FormControlLabel required control={<Switch />} label="Required" />
                  <FormControlLabel disabled control={<Switch />} label="Disabled" />
                </FormGroup>
                </div>
            } /> 

          <Route path="/context" element={<Parent />} />

          <Route path="/ref" element={<Ref />} />
          </Routes>
        </BrowserRouter>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
