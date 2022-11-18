import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/Sidebar"
import { useState, useEffect } from "react";
import {userPost} from "./types/User"
import Main from "./components/Main"
import { pointPost } from './types/Point'


function App() {

  const [users, setUsers] = useState<userPost[]>([]);

  const fetchUsers = async () => {
    try {
        const res = await fetch("https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/users", {method: 'GET'});
        if (!res.ok) {
        throw Error(`Failed to fetch users: ${res.status}`);
        }
    
        const users = await res.json();
        setUsers(users);
    } catch (err) {
        console.error(err);
    }
  };



  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");




  const [mates, setMates] = useState<userPost[]>([]);

  const fetchMates = async(value: string) => {
    try {
      const res = await fetch(`https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/mate?userId=${value}`, {method: 'GET'});
      if (!res.ok) {
      throw Error(`Failed to fetch users: ${res.status}`);
      }
  
      const mates = await res.json();
      setMates(mates);
    } catch (err) {
      console.error(err);
    }
  };

  

  const [takes, setTakes] = useState<pointPost[]>([])
  const fetchTakes = async(value: string) => {
    try {
      const res = await fetch(`https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/take?userId=${value}`, {method: 'GET'});
      if (!res.ok) {
      throw Error(`Failed to fetch users: ${res.status}`);
      }
  
      const takes = await res.json();
      setTakes(takes);
    } catch (err) {
      console.error(err);
    }
  };


  const [gives, setGives] = useState<pointPost[]>([])
  const fetchGives = async(value: string) => {
    try {
      const res = await fetch(`https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/give?userId=${value}`, {method: 'GET'});
      if (!res.ok) {
      throw Error(`Failed to fetch users: ${res.status}`);
      }
  
      const gives = await res.json();
      setGives(gives);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="App" style={{ display: "flex", flexDirection: "row" }}> 
    {/* style={{ display: "flex", flexDirection: "row" }} */}
      <Sidebar users={users} fetchUsers={fetchUsers} setUser={setUser} setUserId={setUserId} fetchMates={fetchMates} fetchTakes={fetchTakes} fetchGives={fetchGives}/>
      <Main user={user} userId={userId} mates={mates} fetchMates={fetchMates} takes={takes} users={users} gives={gives} fetchGives={fetchGives}/>
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

