import React from 'react'
import {userPost} from "../types/User"

type Props ={
    mates: userPost[];
}

const MateList  = (props :Props) => {
    const listUsers = props.mates.map((item) =>{
        return(
            <li key={item.userId} className='list'>
                <div id="name">{item.name}</div>
                <div id="points">{item.points}</div>
            </li>
        )
    })

    return (
        <div>
            <div className='matesTitle'><h3>メンバーポイント一覧</h3></div>
            <ul className='MateList'>
                <li className='title'>
                    <div id="name">name</div>
                    <div id="points">points</div>
                </li>
                {listUsers}
            </ul>
        </div>
    )
}

export default MateList 
