import logo from './logo.svg';
import './App.css';
import  Hello from './components/Head';


const arrStr = [
  <p>Hello, </p> ,
  <p> GoodBye, </p>,
]

const arrStr2 = [
  "Hello, ",
  "GoodBye, ",
  "How are you, ",
  "What time is it, "
]

function App() {
  const newArr = arrStr2.map((str, idx) => {
    return (
      <p key={idx}>
        {str}
      </p>
    )
  })

  return (
    <div className="App">
      <h1>Hello Everyone</h1>
      <img src="https://http.cat/202" alt="" />
      
      <Hello 
        username="Ryan" 
      />
      {newArr}
      {arrStr2.map((str, idx) => {
        return (
          <div key={idx}>
            <div>
              <Hello username={str} />
            </div>
          </div> 
        )
      })}
    </div>
  );
}

export default App;
