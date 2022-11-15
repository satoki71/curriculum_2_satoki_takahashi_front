import { useState } from "react";

type Props = {
    onSubmit: (name: string, affiliation: string) => void;
  };

const Form = (props: Props) => {

    const [name, setName] = useState("");
    const [affiliation, setAffiliation] = useState("");

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(name, affiliation);
    };

    return (
        <form style={{ display: "flex", flexDirection: "column"}} onSubmit={submit}>
            
            <div className="input-contents1" style={{ display: "flex", flexDirection: "row" }}>
                <label>名前: </label>
                <input
                    type={"text"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
            </div>
            <div className="input-contents2" style={{ display: "flex", flexDirection: "row" }}>
                <label>組織: </label>
                <input
                    type={"text"}
                    style={{ marginBottom: 20 }}
                    value={affiliation}
                    onChange={(e) => setAffiliation(e.target.value)}
                ></input>
            </div>
            
            
            <div>
                <button type={"submit"} className="userRegister">登録</button>
            </div>
        </form>
        
    );
};

export default Form;