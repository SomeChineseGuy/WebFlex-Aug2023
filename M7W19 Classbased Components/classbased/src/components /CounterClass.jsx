import React, {Component} from 'react';

class CounterClass extends Component {
  constructor(props) {
    super()
    this.state = {
      counter: 0,
      input: ""
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.updateInput = this.updateInput.bind(this)
    this.props = props
  }

  increment() {
    // this.state.counter + 1
    this.setState({
      ...this.state,
      counter: this.state.counter + 1
    })
  }

  decrement() {
    this.setState({
      ...this.state,
      counter: this.state.counter - 1
    })
  }

  updateInput(e) {
    this.setState({
      ...this.state,
      input: e.target.value
    }) 
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Class Component</h1>
        <p>Counter {this.state.counter}</p>
        <p>{this.props.message}</p>
        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <input type="text" onChange={this.updateInput}/>
        </div>
      </div>
    )
  }
}

export default CounterClass;