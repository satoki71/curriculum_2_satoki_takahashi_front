import React, {Dispatch, SetStateAction} from 'react'
import {userPost} from "../types/User"
import { pointPost } from '../types/Point'
import Sidebar from './Sidebar'
import PointGiveForm from "./PointGiveForm"
import GiveList from "./GiveList"

type Props = {
    users: userPost[];
    fetchUsers: () => void;
    setUser: Dispatch<SetStateAction<string>>;
    setUserId: Dispatch<SetStateAction<string>>;
    fetchMates: (value: string) => void;
    fetchTakes: (value: string) => void;
    fetchGives: (value: string) => void;
    user : string;
    userId : string;
    takes: pointPost[];
    mates: userPost[];
    gives: pointPost[];
}


const Give = (props :Props) => {
    const fetchUserUpdate = async (userId :string) => {
        try {
            const res = await fetch(`https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/user?userId=${userId}`, 
            {
                method: "PUT",

                // body: JSON.stringify({
                //     userId: userId
                // }),
            });
            if (!res.ok) {
                throw Error(`Failed to update user: ${res.status}`);
            }
            
            // const users = await res.json();
            // setUsers(users);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="App" style={{ display: "flex", flexDirection: "row" }}>
            <Sidebar users={props.users} fetchUsers={props.fetchUsers} setUser={props.setUser} setUserId={props.setUserId} fetchMates={props.fetchMates} fetchTakes={props.fetchTakes} fetchGives={props.fetchGives}/>
            <div>
                <h2>Hello! {props.user}</h2>
                <PointGiveForm mates={props.mates} userId={props.userId} fetchUserUpdate={fetchUserUpdate} fetchMates={props.fetchMates}/>
                <GiveList gives={props.gives} users={props.users} fetchUserUpdate={fetchUserUpdate} fetchMates={props.fetchMates} fetchGives={props.fetchGives}/>
            </div>
        </div>
    )
}

export default Give
