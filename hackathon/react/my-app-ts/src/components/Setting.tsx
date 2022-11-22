import React, {Dispatch, SetStateAction} from 'react'
import Sidebar from './Sidebar'
import UserEdit from './UserEdit'
import {userPost} from "../types/User"


type Props={
    users: userPost[];
    setUserId: Dispatch<SetStateAction<string>>;
    user : string;
    userId : string;
    fetchUsers: () => void;
    setUser: Dispatch<SetStateAction<string>>;
    fetchMates: (value: string) => void;
    fetchTakes: (value: string) => void;
    fetchGives: (value: string) => void;
}

const Setting = (props :Props) => {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar users={props.users} fetchUsers={props.fetchUsers} setUser={props.setUser} setUserId={props.setUserId} fetchMates={props.fetchMates} fetchTakes={props.fetchTakes} fetchGives={props.fetchGives}/>
        <div className='GiveMain'>
            <h2>Hello! {props.user}</h2>
            <UserEdit user={props.user} userId={props.userId} fetchUsers={props.fetchUsers} setUser={props.setUser} fetchMates={props.fetchMates} fetchTakes={props.fetchTakes} fetchGives={props.fetchGives}/>
        </div>
    </div>
  )
}

export default Setting
