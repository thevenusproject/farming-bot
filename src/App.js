import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_STREAM_URL)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={process.env.REACT_APP_STREAM_URL} className="Stream" alt="stream" />
      </header>
    </div>
  );
}

export default App;
