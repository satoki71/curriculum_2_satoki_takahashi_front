import React from 'react'
import {pointPost} from "../types/Point"
import MateList from './MateList ';
import {userPost} from "../types/User"

type Props ={
    takes: pointPost[];
    users: userPost[];
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
        <div className='TakeList'>
            <label>受信ポイント一覧</label>
            <ul>
                <li className='title'>name, points, message</li>
                {listTakes}
            </ul>
        </div>
    )
}

export default TakeList
