import React from 'react'
import {userPost} from "./Sidebar"

type Props ={
    mates: userPost[];
}

const MateList  = (props :Props) => {
    const listUsers = props.mates.map((item) =>{
        return(
            <li key={item.userId} className='list'>
            {item.name}, {item.points}
            </li>
        )
    })

    return (
        <div>
            メンバーポイント一覧
            <ul className='MateList'>
                <li className='title'>name, points</li>
                {listUsers}
            </ul>
        </div>
    )
}

export default MateList 
