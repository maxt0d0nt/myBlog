import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <>
      <div className='register'>
        <span className='registerTitle'>Registrarse</span>
        <form className='registerForm'>
          <label>Email</label>
          <input type="text" className='registerInput' placeholder="Introduzca su email..." />
          <label>Password</label>
          <input type="password" className='registerInput' placeholder="Introduzca su contraseña" />
        </form>
        <button className="loginRegisterButton">
          <Link to={"/login"}>Login</Link>
        </button>
        <button className="loginButton">Registrarse</button>
      </div>
    </>
  )
}
