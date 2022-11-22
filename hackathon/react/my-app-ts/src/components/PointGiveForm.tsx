import React from 'react'
import Select from 'react-select'
import {useState} from "react";
import {userPost} from "../types/User";
import {UserOption} from "../types/User";

type Props ={
    mates: userPost[];
    userId: string;
    fetchUserUpdate:(userid: string) => void;
    fetchMates: (value: string) => void;
    fetchGives: (value: string) => void;
}

// type PointGive = {
//     fromUserId: string;
//     points: number;
//     message: string;
//     toUserId: string;
// }

const PointGiveForm = (props :Props) => {

    const [points, setPoints] = useState(0);
    const [message, setMessage] = useState("Thank you");
    const [toUserId, setToUserId] = useState("");

    const onSubmit = async(fromUserId: string, points: number, message: string, toUserId: string) => {

        if (points==null) {
          alert("Please enter points");
          return;
        }
        if (points==0) {
            alert("Please enter points");
            return;
        }
    
        // if (pointGive.message.length > 50) {
        //   alert("Please enter a name shorter than 50 characters");
        //   return;
        // }

        if (!message) {
            alert("Please enter message");
            return;
        }

        if (!toUserId) {
            alert("Please enter user ");
            return;
        }
    
        try{
          const response = await fetch(
            "https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/give",
            {
              method: "POST",
    
              body: JSON.stringify({
                fromUserId: fromUserId,
                points: points,
                message: message,
                toUserId: toUserId
              }),
            });
            if (!response.ok) {
              throw Error(`Failed to create user: ${response.status}`);
            }
            props.fetchUserUpdate(toUserId);
            setPoints(0);
            setMessage("Thank you");
            setToUserId("");
            props.fetchMates(fromUserId);
            props.fetchGives(fromUserId);
        } catch (err) {
          console.error(err);
        }
    }; 

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(props.userId, points, message, toUserId);
    };





    function convertToOption(users: userPost): UserOption {
        return {
            // value1: users.userId,
            value: users.userId,
            label: users.name
            // affiliationId: user.affiliationId,
            // points: user.points,
        };
    }

    const options = props.mates.map(convertToOption)

    const onChange = (e: { label: string; value: string; } | null) => {
        if (e == null) {
            return;
        }
        setToUserId(e.value);
    }

    return (
        <form style={{ display: "flex", flexDirection: "column"}} onSubmit={submit} className="PointGiveForm">
            <div className='giveFormTitle'><h3>送信フォーム</h3></div>
            <div className='GiveForm1'>
                <div className="point-contents1" style={{ display: "flex", flexDirection: "row" }}>
                    <label className='giveLabel'>誰に </label>
                    <Select 
                        options={options}
                        defaultValue={{label:'',value:''}}
                        onChange={onChange}
                        placeholder="select user"
                        isClearable={true}
                        isSearchable={true}
                    />
                    {/* <input
                        type={"text"}
                        value={props.name}
                        onChange={(e) => props.setName(e.target.value)}
                    ></input> */}
                </div>
                <div className="point-contents2" style={{ display: "flex", flexDirection: "row" }}>
                    <label className='giveLabel'>ポイント </label>
                    <input
                        className='give-input'
                        type={"number"}
                        value={points}
                        onChange={(e) => setPoints(Number(e.target.value))}
                    ></input>
                </div>
            </div>
            <div className="point-contents3" style={{ display: "flex", flexDirection: "row" }}>
                <label className='giveLabel'>メッセージ </label>
                <input
                    type={"text"}
                    value={message}
                    // defaultValue="Thank you" 
                    placeholder="Thank you"
                    onChange={(e) => setMessage(e.target.value)}
                ></input>
            </div>
                
            <div className='pointButtonArea'>
                <div className='pointButtonEnp'></div>
                <div className='pointButton'>
                    <button type={"submit"} className="buttonbody">送信</button>
                </div>
            </div>
        </form>
    )
}

export default PointGiveForm
