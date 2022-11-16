import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/Sidebar"
import { useState, useEffect } from "react";
import {userPost} from "./components/Sidebar"

function App() {
  const [mates, setMates] = useState<userPost[]>([]);

  const fetchMates = async(value: string) => {
    try {
      const res = await fetch(`https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/mate?name=${value}`, {method: 'GET'});
      if (!res.ok) {
      throw Error(`Failed to fetch users: ${res.status}`);
      }
  
      const mates = await res.json();
      setMates(mates);
  } catch (err) {
      console.error(err);
  }
  };

  
  return (
    <div className="App">
      <Sidebar fetchMates={fetchMates}/>
      {/* <Main /> */}
    </div>
  );
}

export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

