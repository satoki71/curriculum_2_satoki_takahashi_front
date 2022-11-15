import React from 'react'
import Select from 'react-select'
import { useState, useEffect } from "react";

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

const UserSelect = () => {
    type userPost = {
        userId: string
        name: string
        affiliationId: string
        points: number
    }
    
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

    type UserOption = {
        value: string;
        label: string;
        // affiliationId: string;
        // points: number;
    };

    // function convertToUser(args: UserOption | null): userPost | null {
    //     if (!args) return null;
    //     return {
    //         userId: args.value,
    //         name: args.label,
    //         affiliationId: args.affiliationId,
    //         points: args.points,
    //     };
    // }
    
    function convertToOption(user: userPost): UserOption {
        return {
            value: user.userId,
            label: user.name
            // affiliationId: user.affiliationId,
            // points: user.points,
        };
    }
    
    const options = users.map(convertToOption)
    
    // const options = users.map((UserOption) =>{
    //     { value: UserOption.name, label: UserOption.name }
    // })

    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    // ]
    
    return (
        <div className='UserSelect'>
            <label>ユーザー名</label>
            <Select 
            options={options}
            // defaultValue={{label:'',value:''}}
            onChange={(value)=>{console.log(value)}}
            placeholder="please select user"
            isClearable={true}
            isSearchable={true}
            />
        </div>
    )
}

export default UserSelect

