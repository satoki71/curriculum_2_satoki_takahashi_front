import React, {Dispatch, SetStateAction} from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";

type Props = {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    affiliation: string;
    setAffiliation: Dispatch<SetStateAction<string>>;
    onSubmit: (name: string, affiliation: string) => void;
  };

const Form = (props: Props) => {

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(props.name, props.affiliation);
    };

    return (
        <form style={{ display: "flex", flexDirection: "column"}} onSubmit={submit}>
            
            <div className="input-contents1" style={{ display: "flex", flexDirection: "row" }}>
                <label>名前: </label>
                <input
                    type={"text"}
                    value={props.name}
                    onChange={(e) => props.setName(e.target.value)}
                ></input>
            </div>
            <div className="input-contents2" style={{ display: "flex", flexDirection: "row" }}>
                <label>組織: </label>
                <input
                    type={"text"}
                    style={{ marginBottom: 20 }}
                    value={props.affiliation}
                    onChange={(e) => props.setAffiliation(e.target.value)}
                ></input>
            </div>
            
            
            <div>
                <button type={"submit"} className="userRegister">登録</button>
            </div>
        </form>
        
    );
};

export default Form;