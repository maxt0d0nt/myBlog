import React from 'react'
import './Settings.css';
import { Sidebar } from '../../components/sidebar/Sidebar'

export const Settings = () => {
    return (
        <>
            <div className='settings'>
                <div className='settingsWrapper'>
                    <div className='settingsTitle'>
                        <span className='settingsUpdateTitle'>Actualiza tu cuenta</span>
                        <span className='settingsDeleteTitle'>Delete Account</span>
                    </div>
                    <form className='settingsForm'>
                        <label>Foto de Perfil</label>
                        <div className='settingsPP'>
                            <img
                                src='https://images.unsplash.com/photo-1664657218185-ea67e7e279f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                                alt='settingPPImg'
                            />
                            <label htmlFor='fileInput'>
                                <i className='settingsPPIcon far fa-user-circle'></i>
                            </label>
                            <input type="file" id="fileInput" style={{ display: "none" }} />
                        </div>
                        <label>Username</label>
                        <input type="text" placeholder="Safak" />
                        <label>Email</label>
                        <input type="email" placeholder="email@email.com" />
                        <label>Password</label>
                        <input type="password" />
                        <button className='settingsSubmit'>Actualizar</button>
                    </form>
                </div>
                < Sidebar />
            </div>
        </>
    )
}

