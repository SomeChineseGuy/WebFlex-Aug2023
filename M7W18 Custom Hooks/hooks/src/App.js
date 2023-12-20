import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import useCounter from './hooks/useCounter';
import Input from './components/Input';
import Effect from './components/Effect';
import Data from './components/Data';

function App() {
  return (
    <div className="App">
      <h1>Hello Everyone!</h1>
      {/* <Counter />
      <Input /> */}
      {/* <Effect /> */}
      <Data />
    </div>
  );
}

export default App;
