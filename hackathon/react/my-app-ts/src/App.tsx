import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/Sidebar"
import { useState, useEffect } from "react";
import {userPost} from "./types/User"
import Main from "./components/Main"
import { pointPost, pointGiveList} from './types/Point'
import {affiliationPost} from './types/Affiliation'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Take from "./components/Take"
import Give from "./components/Give"
import UserForm from './components/UserForm';
import Setting from './components/Setting';





function App() {

  const [users, setUsers] = useState<userPost[]>([]);

  const fetchUsers = async() => {
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


  const [affiliationName, setAffiliationName] = useState("");

  const fetchAffiliation = async(value: string) => {
    try {
      const res = await fetch(`https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/affiliationUser?userId=${value}`, {method: 'GET'});
      if (!res.ok) {
      throw Error(`Failed to fetch users: ${res.status}`);
      }
  
      const affiliation = await res.json();
      setAffiliationName(affiliation[0].name);
    } catch (err) {
      console.error(err);
    }
  };




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


  // const [gives, setGives] = useState<pointPost[]>([])
  const [giveList, setGiveList] = useState<pointGiveList[]>([])
  const fetchGives = async(value: string) => {
    try {
      const res = await fetch(`https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/give?userId=${value}`, {method: 'GET'});
      if (!res.ok) {
      throw Error(`Failed to fetch users: ${res.status}`);
      }
  
      const gives : pointPost[] = await res.json();

      const res2 = await fetch(`https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/mate?userId=${value}`, {method: 'GET'});
      if (!res2.ok) {
      throw Error(`Failed to fetch users: ${res2.status}`);
      }
  
      const mates :userPost[] = await res2.json();

      const options = gives.map((item) =>{
        const getName = mates.filter((mates) =>{
            return item.toUserId == mates.userId
        })
    
        return(
            {
                id: item.id,
                fromUserId : item.fromUserId,
                name: getName[0].name,
                points: item.points,
                message: item.message,
                toUserId: item.toUserId
            }
        )
        
      })
      setGiveList(options)
      // setGives(gives);
    } catch (err) {
      console.error(err);
    }
    
  };


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home user={user} userId={userId} mates={mates} fetchMates={fetchMates} takes={takes}  users={users} fetchGives={fetchGives} fetchUsers={fetchUsers} setUser={setUser} setUserId={setUserId} fetchTakes={fetchTakes} fetchAffiliation={fetchAffiliation} affiliationName={affiliationName}/>} />
          <Route path="/Take" element={<Take users={users} fetchUsers={fetchUsers} setUser={setUser} setUserId={setUserId} fetchMates={fetchMates} fetchTakes={fetchTakes} fetchGives={fetchGives} user={user} userId={userId} takes={takes} fetchAffiliation={fetchAffiliation} affiliationName={affiliationName}/>} />
          <Route path="/Give" element={<Give users={users} fetchUsers={fetchUsers} setUser={setUser} setUserId={setUserId} fetchMates={fetchMates} fetchTakes={fetchTakes} fetchGives={fetchGives} user={user} userId={userId} takes={takes} mates={mates} giveList={giveList} fetchAffiliation={fetchAffiliation} affiliationName={affiliationName}/>} />
          <Route path="/Setting" element={<Setting users={users} setUserId={setUserId} user={user} userId={userId} fetchUsers={fetchUsers} setUser={setUser} fetchMates={fetchMates} fetchTakes={fetchTakes} fetchGives={fetchGives} fetchAffiliation={fetchAffiliation} affiliationName={affiliationName}/>} />
        </Routes>
      </div>
    </BrowserRouter>

    // <Home />

    // <div className="App" style={{ display: "flex", flexDirection: "row" }}> 
    // {/* style={{ display: "flex", flexDirection: "row" }} */}
    //   <Sidebar users={users} fetchUsers={fetchUsers} setUser={setUser} setUserId={setUserId} fetchMates={fetchMates} fetchTakes={fetchTakes} fetchGives={fetchGives}/>
    //   <Main user={user} userId={userId} mates={mates} fetchMates={fetchMates} takes={takes} users={users} gives={gives} fetchGives={fetchGives}/>
    // </div>
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

