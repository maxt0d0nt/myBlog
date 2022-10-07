import React from 'react';
import './Login.css'

export const Login = () => {
    return (
        <>
            <div className='login'>
                <span className='loginTitle'>Login</span>
                <form className='loginForm'>
                    <label>Email</label>
                    <input type="text" className='loginInput' placeholder="Introduzca su email..." />
                    <label>Password</label>
                    <input type="password" className='loginInput' placeholder="Introduzca su contraseña" />
                </form>
                <button className="loginRegisterButton">Registrarse</button>
                <button className="loginButton">Login</button>
            </div>
        </>
    )
}
