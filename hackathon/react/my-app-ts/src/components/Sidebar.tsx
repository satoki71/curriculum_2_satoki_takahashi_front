import React, {Dispatch, SetStateAction} from 'react'
import{SidebarData} from "./SidebarData"
import UserForm from "./UserForm"
import UserSelect from "./UserSelect"
import { useState, useEffect } from "react";
import {userPost} from "../types/User"
import AffiliationForm from './AffiliationForm';
import {affiliationPost} from '../types/Affiliation'


type Props = {
  users: userPost[];
  fetchUsers: () => void;
  setUser: Dispatch<SetStateAction<string>>;
  setUserId: Dispatch<SetStateAction<string>>;
  fetchMates: (value: string) => void;
  fetchTakes: (value: string) => void;
  fetchGives: (value: string) => void;
  fetchAffiliation: (value: string) => void;
}


const Sidebar = (props: Props) => {
    const [affiliations, setAffiliations] = useState<affiliationPost[]>([]);

    const fetchAffiliations = async () => {
      try {
          const res = await fetch("https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/affiliation", {method: 'GET'});
          if (!res.ok) {
          throw Error(`Failed to fetch users: ${res.status}`);
          }
      
          const affiliations = await res.json();
          setAffiliations(affiliations);
      } catch (err) {
          console.error(err);
      }
    };

    useEffect(() => {
        fetchAffiliations()
    },[])

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
            alert("Please select affiliation");
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
            props.fetchUsers();
        } catch (err) {
          console.error(err);
        }
    };  


    return (
        <div className="Sidebar">
          <div className="sticky">
            <UserSelect setUser={props.setUser} setUserId={props.setUserId} users={props.users} fetchUsers={props.fetchUsers} fetchMates={props.fetchMates} fetchTakes={props.fetchTakes} fetchGives={props.fetchGives} fetchAffiliation={props.fetchAffiliation}/>
            <ul className='Sidebarlist'>
                {SidebarData.map((value, key) => {
                    return(
                        <li key={key} 
                            id={window.location.pathname == value.link ? "active" : ""} //pathnameがlinkと等しければactive :otherwise
                            className="row" 
                            onClick={() => {
                                window.location.pathname = value.link; //クリックした時にlinkのエンドポイントがつく
                            }}>    
                            <div id="icon">{value.icon}</div>
                            <div id="title">{value.title}</div>
                        </li>
                    )
                })}
            </ul>
            <div>
              <UserForm name={name} setName={setName} affiliation={affiliation} setAffiliation={setAffiliation} onSubmit={onSubmit} affiliations={affiliations}/>
            </div>
            <div>
              <AffiliationForm fetchAffiliations={fetchAffiliations}/>
            </div>
          </div>
        </div>
    )
}

export default Sidebar
