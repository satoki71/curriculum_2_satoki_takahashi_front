import React from 'react'
import {pointPost} from "../App"
import MateList from './MateList ';
import {userPost} from "./Sidebar"

type Props ={
    takes: pointPost[];
    users: userPost[];
}

type takeOption = {
    userId: string;
    name: string;
}

const TakeList = (props :Props) => {

    
    const listTakes = props.takes.map((item) =>{
        const getName = props.users.filter((users) =>{
            return item.fromUserId == users.userId
        })
    
        return(
            // console.log(getName)
            <li key={item.id} className='list'>
            {getName[0].name}, {item.points}, {item.message}
            </li>
        )
        
    })


    return (
        <div>
            受信ポイント一覧
            <ul className='TakeList'>
                <li className='title'>name, points, message</li>
                {listTakes}
            </ul>
        </div>
    )
}

export default TakeList
