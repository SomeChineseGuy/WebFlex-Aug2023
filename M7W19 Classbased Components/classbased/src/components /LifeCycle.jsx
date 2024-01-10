import { Component, useEffect } from "react";
import axios from 'axios';
import "./LifeCycle.css";

class LifeCycle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageURL: ""
    }
  }

  // useEffect(() => {}, [])
  // make my api call
  componentDidMount() {
    console.log('Did mount');
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then((res) => {

      this.setState({
        imageURL: res.data.message,
        counter: 0
      })
    })
  }

  // useEffect(() => {})
  componentDidUpdate(prevProps, prevState) {
    console.log('Did update');
    console.log(prevState);
    // Do not setState here
    // this.setState({
    //   ...this.state,
    //   counter: 0
    // })
  }

  /* 
  useEffect(() => {
    return {

    }
  })
  */
  componentWillUnmount() {
    console.log('WIll unmount');
  }

  render() {
    return (
      <div>
        <h1>Life Cycle</h1>
        {this.state.imageURL && <img src={this.state.imageURL} />}
      </div>
    )
  }
}

export default LifeCycle

// useEffect(() => {
//   axios.get("")
// }, [])