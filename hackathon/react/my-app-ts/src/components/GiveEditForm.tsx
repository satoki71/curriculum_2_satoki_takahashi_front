import React from 'react'
import {useState} from "react";
import {GiveEditOption} from "../types/Point"

type Props = {
    item: GiveEditOption;
    fetchUserUpdate:(userid: string) => void;
    fetchMates: (value: string) => void;
}


const GiveEditForm = (props :Props) => {

    const [points, setPoints] = useState(props.item.points);
    const [message, setMessage] = useState(props.item.message);

    const onSubmit = async(id: string, fromUserId: string, points: number, message: string, toUserId: string) => {
        
        if (points==null) {
          alert("Please enter points");
          return;
        }
        if (points<=0) {
            alert("Please enter points");
            return;
        }
    
        // if (message.length > 50) {
        //   alert("Please enter a name shorter than 50 characters");
        //   return;
        // }

        if (!message) {
            alert("Please enter message");
            return;
        }
    
        try{
          const response = await fetch(
            "https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/give",
            {
              method: "PUT",
    
              body: JSON.stringify({
                id: id,
                points: points,
                message: message,
              }),
            });
            if (!response.ok) {
              throw Error(`Failed to create user: ${response.status}`);
            }
            props.fetchUserUpdate(toUserId);
            props.fetchMates(fromUserId);
        } catch (err) {
          console.error(err);
        }
    }; 

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(props.item.id, props.item.fromUserId, points, message, props.item.toUserId);
    };


    return (
        <div style={{ display: "flex", flexDirection: "row"}} className="GiveEditForm">
            <form onSubmit={submit} className="PointGiveEditForm">
                <div className='giveEditName'>{props.item.name}</div>
            
                <div className="give-edit-contents1" style={{ display: "flex", flexDirection: "row" }}>
                    {/* <label>ポイント: </label> */}
                    <input
                        className='point-input'
                        type={"number"}
                        // value={points}
                        defaultValue={props.item.points}
                        onChange={(e) => setPoints(Number(e.target.value))}
                    ></input>
                </div>
                <div className="give-edit-contents2" style={{ display: "flex", flexDirection: "row" }}>
                    {/* <label>メッセージ: </label> */}
                    <input
                        className='message-input'
                        type={"text"}
                        // value={message}
                        defaultValue={props.item.message}
                        placeholder="Thank you"
                        onChange={(e) => setMessage(e.target.value)}
                    ></input>
                </div>
                    
                <div className='GiveEditButtonItem'>
                    <button type={"submit"} className="userRegister">編集</button>
                </div>
            </form>
        
        </div>
    )
}

export default GiveEditForm
