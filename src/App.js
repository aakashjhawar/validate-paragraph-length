import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';

class App extends Component { 
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  render() {
    return (
    <div className="App">
        <h1>Hi! I'm React.</h1>
        <p>I'm the paragraph of this app.</p>        
        <input 
          type="text" 
          onChange={this.inputChangedHandler} 
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation
          inputLength={this.state.userInput.length} />
    </div>
    );
  }
}

export default App;
