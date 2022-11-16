import React from 'react'
import Select from 'react-select'
import { useState, useEffect } from "react";
import {userPost} from "./Sidebar"
import { type } from 'os';

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

type Props = {
    users: userPost[];
    // users: (setUsers: userPost[] | null) => void;
    // [users, setUsers]: (useState<userPost[]>([])) => void;
    fetchUsers: () => void;
    fetchMates: (value: string) => void;
};

type UserOption = {
    // value1: string;
    value: string;
    label: string;
    // affiliationId: string;
    // points: number;
};

type UserName = {
    name: string
}

const UserSelect = (props: Props) => {

    // const [users, setUsers] = useState<userPost[]>([]);

    useEffect(() => {
        props.fetchUsers()
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
    // const option = convertToOption(props.users)
    // const options = option.map()
    
    const options = props.users.map(convertToOption)
    
    // const options = users.map((item) =>[
    //     { value: item.name, label: item.name }
    // ])

    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    // ]

    // (value)=>{props.fetchMates(value)}
    // const onChange = (value: string) =>{
    //     console.log(value); 
    //     props.fetchMates(value)
    // }

    const onChange = (e: { label: string; value: string; } | null) => {
        if (e != null) {
            props.fetchMates(e.label);
            console.log(e.value); 
            return;
        }
        console.log(e);
    }
    // const onChange = (e: any) => {
    //     // props.fetchMates(e.taget.value)
    //     console.log(e.target.value);
    // }

    return (
        <div className='UserSelect'>
            <label>ユーザー名</label>
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