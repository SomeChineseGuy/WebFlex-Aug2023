import logo from './logo.svg';
import './App.css';
import  React from 'react'
import Counter from './components/Counter';
import Parent from './components/Parent';
import MoviePick from './components/MoviePick';

function App() {
  
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <Counter /> */}
      {/* <Parent /> */}
      <MoviePick />

    </div>
  );
}

export default App;
