import React, {Dispatch, SetStateAction} from "react";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Select from 'react-select'

type Props = {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    affiliation: string;
    setAffiliation: Dispatch<SetStateAction<string>>;
    onSubmit: (name: string, affiliation: string) => void;
};

type affiliationPost = {
    id: string;
    name: string;
    number: number;
}

type AffiliationOption = {
    value: string;
    label: string;
};

const UserForm = (props: Props) => {

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(props.name, props.affiliation);
    };





    const [affiliations, setAffiliations] = useState<affiliationPost[]>([]);

    const fetchAffiliations = async () => {
      try {
          const res = await fetch("https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/affiliation", {method: 'GET'});
          if (!res.ok) {
          throw Error(`Failed to fetch users: ${res.status}`);
          }
      
          const affiliations = await res.json();
          setAffiliations(affiliations);
      } catch (err) {
          console.error(err);
      }
    };

    useEffect(() => {
        fetchAffiliations()
    },[])

    function convertToOption(affiliations: affiliationPost): AffiliationOption {
        return {
            value: affiliations.id,
            label: affiliations.name
        };
    }

    const options = affiliations.map(convertToOption)

    const onChange = (e: { label: string; value: string; } | null) => {
        if (e == null) {
            // alert("Please select affiliation");
            return;
        }
        props.setAffiliation(e.label);
    }





    return (
        <form style={{ display: "flex", flexDirection: "column"}} onSubmit={submit} className="userForm">
            <label className="userFormTitle">ユーザー登録</label>
            <div className="input-contents1" style={{ display: "flex", flexDirection: "row" }}>
                <label>名前: </label>
                <input
                    type={"text"}
                    value={props.name}
                    onChange={(e) => props.setName(e.target.value)}
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
                {/* <input
                    type={"text"}
                    style={{ marginBottom: 20 }}
                    value={props.affiliation}
                    onChange={(e) => props.setAffiliation(e.target.value)}
                ></input> */}
            </div>
            
            
            <div>
                <button type={"submit"} className="userRegister">登録</button>
            </div>
        </form>
        
    );
};

export default UserForm;