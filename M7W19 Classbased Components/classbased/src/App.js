import logo from './logo.svg';
import './App.css';
import Counter from './components /Counter';
import CounterClass from './components /CounterClass';
import LifeCycle from './components /LifeCycle';

function App() {
  return (
    <div className="App">
      <h1>Welcome back!</h1>
      <Counter message="Hello!" />
      <CounterClass message="Goodbye!" />
      <LifeCycle />
    </div>
  );
}

export default App;
