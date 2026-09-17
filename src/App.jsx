import './App.css';
import { Component } from "react";

// const message = "Hello World";


class App extends Component {
  state = {
    user: 0,
  }

 
  



handleMinus = () => {
  this.setState((prev) => {
    return {
      count: prev.count - 1
    };
  });
}
  

handlePluse = () => {
  this.setState((prev) => {
    return {
      count: prev.count + 1
    }
  })
}

  

  render() {


    return (
      <>
      <p>{this.state.count}</p>
      <button  onClick={this.handleMinus} type='button'>minus</button>
      <button  onClick={this.handlePluse} type='button'>pluse</button>
      </>
    );
  }
}

export default App;