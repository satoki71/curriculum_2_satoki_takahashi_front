import React, {Dispatch, SetStateAction} from 'react'
import UserSelect from "./UserSelect"
import {userPost} from "../types/User"
import {affiliationPost} from '../types/Affiliation'
import UserForm from "./UserForm"
import AffiliationForm from './AffiliationForm';
import {Link} from "react-router-dom";

type Props = {
  users: userPost[];
  fetchUsers: () => void;
  setUser: Dispatch<SetStateAction<string>>;
  setUserId: Dispatch<SetStateAction<string>>;
  fetchMates: (value: string) => void;
  fetchTakes: (value: string) => void;
  fetchGives: (value: string) => void;
  fetchAffiliation: (value: string) => void;

  affiliations: affiliationPost[];
  fetchAffiliations: () => void;

  setLocalStorageUserId: (userId: string) => void;
  setLocalStorageUser: (user: string) => void;
}

const Login = (props :Props) => {
  return (
    <div className='Login'>
      <div>
        <UserSelect setUser={props.setUser} setUserId={props.setUserId} users={props.users} fetchUsers={props.fetchUsers} fetchMates={props.fetchMates} fetchTakes={props.fetchTakes} fetchGives={props.fetchGives} fetchAffiliation={props.fetchAffiliation} setLocalStorageUserId={props.setLocalStorageUserId} setLocalStorageUser={props.setLocalStorageUser}/>
      </div>
      <div>
        <UserForm affiliations={props.affiliations} fetchUsers={props.fetchUsers}/>
      </div>
      <div>
        <AffiliationForm fetchAffiliations={props.fetchAffiliations}/>
      </div>
      <div className='LinkToHome'>
        <Link to="/">戻る</Link>
      </div>
    </div>
  )
}

export default Login
