import React from 'react'
import {userPost} from "../types/User"
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

type Props ={
    mates: userPost[];
}

const MateList  = (props :Props) => {
    const listUsers = props.mates.map((item, key) =>{
        return(
            <li key={key} className='list'>
                <div id="name">{item.name}</div>
                <div id="points">{item.points}</div>
            </li>
        )
    })

    return (
        <div>
            <div className='matesTitle'><h3>メンバーポイント一覧</h3></div>
            <div className='MateBox'>
                <ul className='MateList'>
                    <li className='title'>
                        <div className='topIcon'>
                            <EmojiEventsOutlinedIcon />
                        </div>
                        <div id="name">n a m e</div>
                        <div id="points">p o i n t s</div>
                    </li>
                    {listUsers}
                </ul>
            </div>
        </div>
    )
}

export default MateList 
