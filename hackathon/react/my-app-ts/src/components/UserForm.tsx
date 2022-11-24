import React, {Dispatch, SetStateAction} from "react";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Select from 'react-select';
import {affiliationPost, AffiliationOption} from '../types/Affiliation'

type Props = {
    // name: string;
    // setName: Dispatch<SetStateAction<string>>;
    // affiliation: string;
    // setAffiliation: Dispatch<SetStateAction<string>>;
    // onSubmit: (name: string, affiliation: string) => void;
    affiliations: affiliationPost[];
    fetchUsers: () => void;
};


const UserForm = (props: Props) => {
    const [name, setName] = useState("");
    const [affiliation, setAffiliation] = useState("");

    const onSubmit = async(name: string, affiliation: string) => {
    
        if (!name) {
          alert("Please enter name");
          return;
        }
    
        if (name.length > 50) {
          alert("Please enter a name shorter than 50 characters");
          return;
        }
        if (!affiliation) {
            alert("Please select affiliation");
            return;
        }
    
        try{
          const response = await fetch(
            "https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/user",
            {
              method: "POST",
    
              body: JSON.stringify({
                name: name,
                affiliation: affiliation,
              }),
            });
            if (!response.ok) {
              throw Error(`Failed to create user: ${response.status}`);
            }
            setName("");
            setAffiliation("");
            props.fetchUsers();
        } catch (err) {
          console.error(err);
        }
    };  

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(name, affiliation);
    };


    function convertToOption(affiliations: affiliationPost): AffiliationOption {
        return {
            value: affiliations.id,
            label: affiliations.name
        };
    }

    const options = props.affiliations.map(convertToOption)

    const onChange = (e: { label: string; value: string; } | null) => {
        if (e == null) {
            // alert("Please select affiliation");
            return;
        }
        setAffiliation(e.label);
    }





    return (
        <form style={{ display: "flex", flexDirection: "column"}} onSubmit={submit} className="userForm">
            <label className="userFormTitle">ユーザー登録</label>
            <div className="input-contents1" style={{ display: "flex", flexDirection: "row" }}>
                <label>名前: </label>
                <input
                    type={"text"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
            </div>
            <div className="input-contents2" style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}>
                <label>組織: </label>
                <Select 
                options={options}
                defaultValue={{label:'',value:''}}
                onChange={onChange}
                placeholder="select affiliation"
                isClearable={true}
                isSearchable={true}
                />
                
            </div>
            
            
            <div className="userRegisterButton">
                <button type={"submit"} className="userRegister">登録</button>
            </div>
        </form>
    );
};

export default UserForm;