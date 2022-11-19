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
                <div id="name">{getName[0].name}</div>
                <div id="points">{item.points}</div>
                <div id="message">{item.message}</div>
            </li>
        )
        
    })


    return (
        <div>
            <div className='takesTitle'><h3>受信ポイント一覧</h3></div>
            <ul className='TakeList'>
                <li className='title'>
                    <div id="name">fromName</div>
                    <div id="points">points</div>
                    <div id="message">message</div>
                </li>
                {listTakes}
            </ul>
        </div>
    )
}

export default TakeList
