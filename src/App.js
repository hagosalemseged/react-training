import logo from './logo.svg';
import './App.css';
import React from 'react';
import Aboutus from './aboutus';

// A single componenet
function MyButton(){
  return (
    <button>Click Me</button>
  );
}
// a second componenets
function ContactUs(){
  return(
    <div>
      <h4>Phone:0914773638</h4>
      <h5>Email:hagosalemeri@gmail.com</h5>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Welcome to React Page</p>
        <h1>Header One</h1>
        <Aboutus/>
        <MyButton/>
        <ContactUs/>
      </header>
    </div>
  );
}

export default App;
