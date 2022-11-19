import React, {Dispatch, SetStateAction}  from 'react'
import Sidebar from "./Sidebar"
import { useState, useEffect } from "react";
import {userPost} from "../types/User"
import Main from "./Main"
import { pointPost } from '../types/Point'
import MateBar from './MateBar'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    registerables,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


type Props = {
    user : string;
    userId : string;
    mates: userPost[];
    fetchMates: (value: string) => void;
    takes: pointPost[];
    users: userPost[];
    gives: pointPost[];
    fetchGives: (value: string) => void;
    fetchUsers: () => void;
    setUser: Dispatch<SetStateAction<string>>;
    setUserId: Dispatch<SetStateAction<string>>;   
    fetchTakes: (value: string) => void;
}

const Home = (props: Props) => {



    const labels = props.mates.map((item) =>{
        return(
            item.name
        )
    })

    const datas = props.mates.map((item) =>{
        return(
            item.points
        )
    })

    const data = {
        labels: labels,
        datasets: [
            {
                label: '貢献ポイント',
                data: datas,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: '貢献度ランキング',
            },
        },
    };
    return (
        <div className="App" style={{ display: "flex", flexDirection: "row" }}> 
            {/* style={{ display: "flex", flexDirection: "row" }} */}
            <Sidebar users={props.users} fetchUsers={props.fetchUsers} setUser={props.setUser} setUserId={props.setUserId} fetchMates={props.fetchMates} fetchTakes={props.fetchTakes} fetchGives={props.fetchGives}/>
            <div className='HomeMain'>
                <h2>Hello! {props.user}</h2>
                <Main user={props.user} userId={props.userId} mates={props.mates} fetchMates={props.fetchMates} takes={props.takes} users={props.users} gives={props.gives} fetchGives={props.fetchGives}/>
                
                <div className="MateBar"> 
                    {/* style={divStyle} */}
                        <Bar
                            id="chart-key"
                            // height={300}
                            // width={300}
                            options={options}
                            data={data}
                        />
                </div>
            </div>
        </div>
    )
}

export default Home


// const [users, setUsers] = useState<userPost[]>([]);

// const fetchUsers = async () => {
//     try {
//         const res = await fetch("https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/users", {method: 'GET'});
//         if (!res.ok) {
//         throw Error(`Failed to fetch users: ${res.status}`);
//         }

//         const users = await res.json();
//         setUsers(users);
//     } catch (err) {
//         console.error(err);
//     }
// };



// const [user, setUser] = useState("");
// const [userId, setUserId] = useState("");




// const [mates, setMates] = useState<userPost[]>([]);

// const fetchMates = async(value: string) => {
//     try {
//     const res = await fetch(`https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/mate?userId=${value}`, {method: 'GET'});
//     if (!res.ok) {
//     throw Error(`Failed to fetch users: ${res.status}`);
//     }

//     const mates = await res.json();
//     setMates(mates);
//     } catch (err) {
//     console.error(err);
//     }
// };



// const [takes, setTakes] = useState<pointPost[]>([])
// const fetchTakes = async(value: string) => {
//     try {
//     const res = await fetch(`https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/take?userId=${value}`, {method: 'GET'});
//     if (!res.ok) {
//     throw Error(`Failed to fetch users: ${res.status}`);
//     }

//     const takes = await res.json();
//     setTakes(takes);
//     } catch (err) {
//     console.error(err);
//     }
// };


// const [gives, setGives] = useState<pointPost[]>([])
// const fetchGives = async(value: string) => {
//     try {
//     const res = await fetch(`https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/give?userId=${value}`, {method: 'GET'});
//     if (!res.ok) {
//     throw Error(`Failed to fetch users: ${res.status}`);
//     }

//     const gives = await res.json();
//     setGives(gives);
//     } catch (err) {
//     console.error(err);
//     }
// };
