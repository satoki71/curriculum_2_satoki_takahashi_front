import React from 'react'
import{SidebarData} from "./SidebarData"
import Form from "./Form"
import UserSelect from "./UserSelect"
import { useState, useEffect } from "react";

function Sidebar() {

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
            // fetchUsers();
        } catch (err) {
          console.error(err);
        }
    };  


    return (
        <div className="Sidebar">
        <UserSelect />
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
        <Form onSubmit={onSubmit}/>
        </div>
    )
}

export default Sidebar
