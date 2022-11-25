import React, {Dispatch, SetStateAction} from 'react'
import Select from 'react-select'
import { useState, useEffect } from "react";
import {userPost} from "../types/User"
import { type } from 'os';
import {UserName, UserOption} from "../types/User"

type Props = {
    setUser: Dispatch<SetStateAction<string>>;
    setUserId: Dispatch<SetStateAction<string>>;
    users: userPost[];
    // users: (setUsers: userPost[] | null) => void;
    // [users, setUsers]: (useState<userPost[]>([])) => void;
    fetchUsers: () => void;
    fetchMates: (value: string) => void;
    fetchTakes: (value: string) => void;
    fetchGives: (value: string) => void;
    fetchAffiliation: (value: string) => void;

    setLocalStorageUserId: (userId: string) => void;
    setLocalStorageUser: (user: string) => void;
};


const UserSelect = (props: Props) => {
    // const setLocalStorageUserId = (userId: string) => {
    //     localStorage.setItem('userId', userId);
    // }

    // const setLocalStorageUser = (user: string) => {
    //     localStorage.setItem('user', user);
    // }
    
    // const getLocalUserId = localStorage.getItem('userId');
    // const getLocalUser = localStorage.getItem('user');
    

    // useEffect(() => {
    //     props.fetchUsers()
    //     if(getLocalUserId!=null) {
    //         props.setUserId(getLocalUserId)
    //         props.fetchMates(getLocalUserId);
    //         props.fetchTakes(getLocalUserId);
    //         props.fetchGives(getLocalUserId);
    //         props.fetchAffiliation(getLocalUserId)
    //     }
    //     if(getLocalUser!=null) {
    //         props.setUser(getLocalUser)
    //     } 
    // },[])


    function convertToUser(args: UserOption): UserName | null {
        // if (!args) return null;
        return {
            name: args.value
        };
    }
    
    function convertToOption(users: userPost): UserOption {
        return {
            // value1: users.userId,
            value: users.userId,
            label: users.name
            // affiliationId: user.affiliationId,
            // points: user.points,
        };
    }
    
    const options = props.users.map(convertToOption)

    const onChange = (e: { label: string; value: string; } | null) => {
        if (e != null) {
            props.setUser(e.label);
            props.setUserId(e.value);
            props.fetchTakes(e.value);
            props.fetchMates(e.value);
            props.fetchGives(e.value);
            props.setLocalStorageUserId(e.value)
            props.setLocalStorageUser(e.label)
            props.fetchAffiliation(e.value)
            //ユーザーを選択するとホームに戻る
            window.location.pathname = "/"
            console.log(e.value); 
            return;
        }
        console.log(e);
    }

    return (
        <div className='UserSelect'>
            <div className='UserSelectLabel'>
                <label>ユーザー選択</label>
            </div>
            <div className='UserSelectBox'>
                <Select 
                options={options}
                defaultValue={{label:'',value:''}}
                onChange={onChange}
                placeholder="please select user"
                isClearable={true}
                isSearchable={true}
                className='Box'
                />
            </div>
        </div>
    )
}

export default UserSelect


