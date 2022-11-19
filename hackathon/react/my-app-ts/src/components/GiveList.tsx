import React from 'react'
import {pointPost} from "../types/Point"
import GiveDeleteButtom from './GiveDeleteButtom';
import GiveEditForm from './GiveEditForm';
import {userPost} from "../types/User"
import UserSelect from './UserSelect';

type Props ={
    gives: pointPost[];
    users: userPost[];
    fetchUserUpdate:(userid: string) => void;
    fetchMates: (value: string) => void;
    fetchGives: (value: string) => void;
}
//form をdefaultValueにすると編集可能
const GiveList = (props :Props) => {
    const options = props.gives.map((item) =>{
        const getName = props.users.filter((users) =>{
            return item.toUserId == users.userId
        })
    
        return(
            {
                id: item.id,
                fromUserId : item.fromUserId,
                name: getName[0].name,
                points: item.points,
                message: item.message,
                toUserId: item.toUserId
            }
        )
        
    })

    const listGives = options.map((item) =>{
    
        return(
            // console.log(getName)
            <li key={item.id} className='list'>
                <div id="form">
                    <GiveEditForm item={item} fetchUserUpdate={props.fetchUserUpdate} fetchMates={props.fetchMates}/>
                </div>
                <div id="delete">
                    <GiveDeleteButtom item={item} fetchUserUpdate={props.fetchUserUpdate} fetchMates={props.fetchMates} fetchGives={props.fetchGives}/>
                </div>
            </li>
        )
        
    })
    // <GiveEditForm item={item} fetchUserUpdate={props.fetchUserUpdate} fetchMates={props.fetchMates}/>

    return (
        <div>
            <div className='takesTitle'><h3>送信ポイント一覧</h3></div>
            <ul className='GiveList'>
                <li className='title'>
                    <div id="name">fromName</div>
                    <div id="points">points</div>
                    <div id="message">message</div>
                </li>
                {/* <li className='title'>name, points, message</li> */}
                {listGives}
            </ul>
        </div>
    )
}

export default GiveList
