import React from 'react'
import {GiveEditOption} from "../types/Point"

type Props = {
    item: GiveEditOption;
    fetchUserUpdate:(userid: string) => void;
    fetchMates: (value: string) => void;
    fetchGives: (value: string) => void;
}

const GiveDeleteButtom = (props :Props) => {

    const onSubmit = async(id: string, fromUserId: string, toUserId: string) => {
    
        try{
          const response = await fetch(
            "https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/give",
            {
              method: "DELETE",
    
              body: JSON.stringify({
                id: id
              }),
            });
            if (!response.ok) {
              throw Error(`Failed to create user: ${response.status}`);
            }
            props.fetchUserUpdate(toUserId);
            props.fetchMates(fromUserId);
            props.fetchGives(fromUserId);
        } catch (err) {
          console.error(err);
        }
    }; 

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(props.item.id, props.item.fromUserId, props.item.toUserId);
    };

    return (
        <div>
            <form style={{ display: "flex", flexDirection: "row"}} onSubmit={submit} className="GiveDeleteButtom">
                <div>
                    <button type={"submit"}>削除</button>
                </div>
            </form>
        </div>
    )
}

export default GiveDeleteButtom
