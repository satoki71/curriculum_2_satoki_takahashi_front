import React from 'react'
import{SidebarData} from "./SidebarData"
import Form from "./Form"
import UserSelect from "./UserSelect"
import { useState, useEffect } from "react";

type Props = {
  fetchMates: (value: string) => void;
}

export type userPost = {
  userId: string
  name: string
  affiliationId: string
  points: number
}


const Sidebar = (props: Props) => {
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






    const [name, setName] = useState("");
    const [affiliation, setAffiliation] = useState("");

    const onSubmit = async(name: string, affiliation: string) => {
    
        if (!name) {
          alert("Please enter name");
          return;
        }
    
        if (name.length > 50) {
          alert("Please enter a name shorter than 50 characters");
          return;
        }
        if (!affiliation) {
            alert("Please enter affiliation");
            return;
          }
    
        try{
          const response = await fetch(
            "https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/user",
            {
              method: "POST",
    
              body: JSON.stringify({
                name: name,
                affiliation: affiliation,
              }),
            });
            if (!response.ok) {
              throw Error(`Failed to create user: ${response.status}`);
            }
            setName("");
            setAffiliation("");
            fetchUsers();
        } catch (err) {
          console.error(err);
        }
    };  


    return (
        <div className="Sidebar">
        <UserSelect users={users} fetchUsers={fetchUsers} fetchMates={props.fetchMates}/>
        <ul className='Sidebarlist'>
            {SidebarData.map((value, key) => {
                return(
                    <li key={key} 
                        id={window.location.pathname == value.link ? "active" : ""} //pathnameがlinkと等しければactive :otherwise
                        className="row" 
                        onClick={() => {
                            window.location.pathname = value.link; //クリックした時にlinkのエンドポイントがつく
                        }}>    
                        <div id="title">{value.title}</div>
                    </li>
                )
            })}
        </ul>
        <Form name={name} setName={setName} affiliation={affiliation} setAffiliation={setAffiliation} onSubmit={onSubmit}/>
        </div>
    )
}

export default Sidebar
