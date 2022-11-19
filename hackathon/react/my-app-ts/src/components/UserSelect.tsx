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
};


const UserSelect = (props: Props) => {
    const setLocalStorageUserId = (userId: string) => {
        localStorage.setItem('userId', userId);
    }

    const setLocalStorageUser = (user: string) => {
        localStorage.setItem('user', user);
    }
    
    const getLocalUserId = localStorage.getItem('userId');
    const getLocalUser = localStorage.getItem('user');
    

    useEffect(() => {
        props.fetchUsers()
        if(getLocalUserId!=null) {
            props.setUserId(getLocalUserId)
            props.fetchMates(getLocalUserId);
            props.fetchTakes(getLocalUserId);
            props.fetchGives(getLocalUserId);
        }
        if(getLocalUser!=null) {
            props.setUser(getLocalUser)
        } 
    },[])


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
            setLocalStorageUserId(e.value)
            setLocalStorageUser(e.label)
            //ユーザーを選択するとホームに戻る
            window.location.pathname = "/"
            console.log(e.value); 
            return;
        }
        console.log(e);
    }

    return (
        <div className='UserSelect'>
            <label>ユーザー選択</label>
            <Select 
            options={options}
            defaultValue={{label:'',value:''}}
            onChange={onChange}
            placeholder="please select user"
            isClearable={true}
            isSearchable={true}
            />
        </div>
    )
}

export default UserSelect

//console.log(value); 

// export type UseSelectProps = {
//     selected: userPost | null;
//     setUser: (user: userPost | null) => void;
// };

// export type userPost = {
//     userId: string
//     name: string
//     affiliationId: string
//     points: number
// }

// export const [users, setUsers] = useState<userPost[]>([]);

// const fetchUsers = async () => {
// try {
//     const res = await fetch("http://localhost:8000/users", {method: 'GET'});
//     if (!res.ok) {
//     throw Error(`Failed to fetch users: ${res.status}`);
//     }

//     const users = await res.json();
//     setUsers(users);
// } catch (err) {
//     console.error(err);
// }
// };


// type UserOption = {
//     label: string;
//     value: string;
//     affiliationId: string;
//     points: number;
// };

// function convertToUser(args: UserOption | null): userPost | null {
//     if (!args) return null;
//     return {
//         userId: args.value,
//         name: args.label,
//         affiliationId: args.affiliationId,
//         points: args.points,
//     };
// }

// function convertToOption(user: userPost): UserOption {
//     return {
//         label: user.name,
//         value: user.userId,
//         affiliationId: user.affiliationId,
//         points: user.points,
//     };
// }

// export const UserSelect: React.FC<UseSelectProps> = ({ setUser, selected }) => {
//     useEffect(() => {
//         fetchUsers()
//     },[])
//     // const value = useMemo(
//     //   () => (selected ? convertToOption(selected) : null),
//     //   [selected]
//     // );
  
//     function onChange(newUser: UserOption | null) {
//       setUser(convertToUser(newUser));
//     }
  
//     return (
//         <div className='UserSelect'>
//         <label>ユーザー名</label>
//         <Select
//             instanceId="userSelect"
//             value={value} // 選択中の値
//             onChange={onChange} // 選択されたときにはしる処理
//             options={users.map(convertToOption)} // 選択肢
//             placeholder="please select user"
//             isClearable={true}
//             isSearchable={true}
//         />
//         </div>
//     );
// };



// type userPost = {
//     userId: string
//     name: string
//     affiliationId: string
//     points: number
// }
