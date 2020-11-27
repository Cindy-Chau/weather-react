import React from "react";
import './App.css';
import Weather from "./weather";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!!!</h1>
        <h2>Hello from Canada! 🏒😄</h2>
        <Weather city="Banff" />
      </header>
    </div>
  );
}

export default App;
