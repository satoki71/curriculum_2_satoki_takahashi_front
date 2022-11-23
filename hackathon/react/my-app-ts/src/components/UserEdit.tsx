import React, {useState, Dispatch, SetStateAction} from 'react'
import TagFacesIcon from '@mui/icons-material/TagFaces';

type Props={
    user : string;
    userId : string;
    fetchUsers: () => void;
    setUser: Dispatch<SetStateAction<string>>;
    fetchMates: (value: string) => void;
    fetchTakes: (value: string) => void;
    fetchGives: (value: string) => void;
}

const UserEdit = (props :Props) => {
    const setLocalStorageUser = (user: string) => {
        localStorage.setItem('user', user);
    }
    // const getLocalUser = localStorage.getItem('user');

    const [newName, setNewName] = useState(props.user);
    const onSubmit = async(userId: string, name: string) => {
        
    
        if (name.length > 50) {
          alert("Please enter a name shorter than 50 characters");
          return;
        }

        if (!name) {
            alert("Please enter new name");
            return;
        }
    
        try {
            const res = await fetch(`https://curriculum-2-satoki-takahashi-per-dufixj5qvq-uc.a.run.app/users`, 
            {
                method: "PUT",

                body: JSON.stringify({
                    userId: userId,
                    name: name
                }),
            });
            if (!res.ok) {
                throw Error(`Failed to update user: ${res.status}`);
            }
            props.setUser(name)
            props.fetchUsers();
            props.fetchMates(userId);
            props.fetchTakes(userId);
            props.fetchGives(userId);
            setLocalStorageUser(name)
        } catch (err) {
            console.error(err);
        }
            
    }; 
    
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(props.userId, newName);
    };


    return (
        <div>
            <form style={{ display: "flex", flexDirection: "row"}} onSubmit={submit} className="NameEditForm">
            
                <div className="name-edit-content" style={{ display: "flex", flexDirection: "row" }}>
                    <div className='nameEditIcon'>
                        <TagFacesIcon />
                    </div>
                    <div className='nameEditLabel'>Your name</div>
                    {/* <label>メッセージ: </label> */}
                    <input
                        className='name-input'
                        type={"text"}
                        // value={newName}
                        defaultValue={props.user}
                        placeholder="enter new name"
                        onChange={(e) => setNewName(e.target.value)}
                    ></input>
                </div>
                    
                <div className='NameEditButtonItem'>
                    <button type={"submit"} className="userRegister">変更</button>
                </div>
            </form>
        </div>
    )
}

export default UserEdit
