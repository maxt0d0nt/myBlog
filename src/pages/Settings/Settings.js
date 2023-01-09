import React, { useContext, useState } from 'react'
import './Settings.css';
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context';
import axios from "axios"

export const Settings = () => {
    const [file, setFile] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { user } =useContext(Context)

    
const handleSubmit = async (e) => {
    e.preventDefault();
    const updateUser = {
        userId: user._id,
        username,
        email,
        password,
    };
    if(file){
        const data = new FormData();
        const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file", file);
            updateUser.profilePic = filename;
            try{
await axios.post("/upload", data )
            }catch(err){  }
    }
    try {
        await axios.put("users/" + user._id, updateUser);
       
    }catch(err){}
    

}

    return (
        <>
            <div className='settings'>
                <div className='settingsWrapper'>
                    <div className='settingsTitle'>
                        <span className='settingsUpdateTitle'>Actualiza tu cuenta</span>
                        <span className='settingsDeleteTitle'>Delete Account</span>
                    </div>
                    <form className='settingsForm'onSubmit={handleSubmit} >
                        <label>Foto de Perfil</label>
                        <div className='settingsPP'>
                            <img
                                src={user.profilePic}
                                alt='settingPPImg'
                            />
                            <label htmlFor='fileInput'>
                                <i className='settingsPPIcon far fa-user-circle'></i>
                            </label>
                            <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                        </div>
                        <label>Username</label>
                        <input type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)} />
                        <label>Email</label>
                        <input type="email" placeholder={user.email} onChange={e => setEmail(e.target.value)}/>
                        <label>Password</label>
                        <input type="password" onChange={e => setPassword(e.target.value)} />
                        <button className='settingsSubmit' type='submit' >Actualizar</button>
                    </form>
                </div>
                < Sidebar />
            </div>
        </>
    )
}

