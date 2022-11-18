import React, {Dispatch, SetStateAction} from 'react'
import Sidebar from './Sidebar'
import TakeList from './TakeList'
import {userPost} from '../types/User'
import { pointPost } from '../types/Point'


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
}

const Take = (props :Props) => {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar users={props.users} fetchUsers={props.fetchUsers} setUser={props.setUser} setUserId={props.setUserId} fetchMates={props.fetchMates} fetchTakes={props.fetchTakes} fetchGives={props.fetchGives}/>
      <div>
        <h2>Hello! {props.user}</h2>
        <TakeList takes={props.takes} users={props.users}/>
      </div>
    </div>
  )
}

export default Take
