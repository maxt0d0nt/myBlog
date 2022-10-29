import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom'
import axios from 'axios';

export const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password
      });
      console.log(res.data)
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true)
    }
  };

  return (
    <>
      <div className='register'>
        <span className='registerTitle'>Registrarse</span>
        <form className='registerForm' onSubmit={handleSubmit}>
          <label>Usuario</label>
          <input type="text" className='registerInput' placeholder="Introduzca su usuario..." onChange={(e) => setUsername(e.target.value)} />

          <label>Email</label>
          <input type="text" className='registerInput' placeholder="Introduzca su email..." onChange={(e) => setMail(e.target.value)} />
          <label>Password</label>
          <input type="password" className='registerInput' placeholder="Introduzca su contraseña" onChange={(e) => setPassword(e.target.value)} />
          <button className="loginButton" type='submit'>Registrarse</button>
        </form>
        <button className="loginRegisterButton" >
          <Link to={"/login"}>Login</Link>
        </button>
        {error && <span style={{ color: "red", marginTop: "10px" }}>Algo salio mal, intente de nuevo</span>}
      </div>
    </>
  )
}
