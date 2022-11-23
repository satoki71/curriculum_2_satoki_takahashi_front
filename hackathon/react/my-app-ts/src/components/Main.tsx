import React from 'react'
import {userPost} from "../types/User"
import MateList from "./MateList "
import PointGiveForm from "./PointGiveForm"
import { pointPost } from '../types/Point'
import TakeList from "./TakeList"
import GiveList from "./GiveList"

type Props = {
    mates: userPost[];
    // user : string;
    // userId : string;
    // fetchMates: (value: string) => void;
    // takes: pointPost[];
    // users: userPost[];
    // gives: pointPost[];
    // fetchGives: (value: string) => void;
}

const Main = (props :Props) => {


    return (
        <div className="Main">
            
            <MateList mates={props.mates}/>
            
        </div>
    )
}

export default Main




// const fetchUserUpdate = async (userId :string) => {
    //     try {
    //         const res = await fetch(`https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/user?userId=${userId}`, 
    //         {
    //             method: "PUT",

    //             // body: JSON.stringify({
    //             //     userId: userId
    //             // }),
    //         });
    //         if (!res.ok) {
    //             throw Error(`Failed to update user: ${res.status}`);
    //         }
            
    //         // const users = await res.json();
    //         // setUsers(users);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };
