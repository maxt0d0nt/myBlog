import React, { useContext, useRef } from 'react';
import './Login.css';
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import axios from 'axios';

export const Login = () => {

    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
try {
    const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
    });
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
} catch (err) {
    dispatch ({ type: "LOGIN_FAILURE"});
}
    }
   
        return (
            <>
                <div className='login'>
                    <span className='loginTitle'>Login</span>
                    <form className='loginForm' onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input ref={userRef} type="text" className='loginInput' placeholder="Introduzca su email..." />
                        <label>Password</label>
                        <input ref={passwordRef} type="password" className='loginInput' placeholder="Introduzca su contraseña" />
                        <button className="loginButton" type='submit'>Login</button>
                    </form>
                    <button className="loginRegisterButton">
                        <Link to={"/register"}>Registrarse</Link>
                    </button>

                </div>
            </>
        )
    }

