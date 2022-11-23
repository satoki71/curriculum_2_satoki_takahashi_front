import React, {useState} from 'react'

type Props = {
    fetchAffiliations: () => void;
}

const AffiliationForm = (props :Props) => {

    const [affiliationName, setAffiliationName] = useState("");

    const onSubmit = async(name :string) => {
        

        if (!name) {
            alert("Please enter affiliation name");
            return;
        }
    
        try{
          const response = await fetch(
            `https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/affiliation`,
            {
              method: "POST",
    
              body: JSON.stringify({
                name: name,
              }),
            });
            if (!response.ok) {
              throw Error(`Failed to create user: ${response.status}`);
            }
            props.fetchAffiliations()
            setAffiliationName("")
        } catch (err) {
          console.error(err);
        }
    }; 

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(affiliationName);
    };

    return (
        <div>
            <form onSubmit={submit} className="AffiliationForm">
                <div className='affiliationName'>組織登録</div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    <div className="affiliation-form-content" style={{ display: "flex", flexDirection: "row" }}>
                        {/* <label>メッセージ: </label> */}
                        <input
                            className='affiliationName-input'
                            type={"text"}
                            value={affiliationName}
                            // defaultValue={""}
                            placeholder="AffiliationName"
                            onChange={(e) => setAffiliationName(e.target.value)}
                        ></input>
                    </div>
                        
                    <div className='AffiliationButtonItem'>
                        <button type={"submit"} className="affiliationRegister">登録</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AffiliationForm
