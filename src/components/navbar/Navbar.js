import './Navbar.css'

import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export const Navbar = () => {

    
    const {user, dispatch} = useContext(Context)

    const handleLogout = () => {
       dispatch({ type: "LOGOUT"})
    }
    return (
        <>
            <div className='top'>
                <div className='topLeft'>
                    <i className='topIcon fab fa-facebook-square'></i>
                    <i className='topIcon fab fa-twitter-square'></i>
                    <i className='topIcon fab fa-instagram-square'></i>
                </div>
                <div className='topCenter'>
                    <ul className='topList'>
                        <li className='topListItem'>
                            <Link to={"/"}>HOME</Link>
                        </li>
                        <li className='topListItem'>
                            <Link to={"/about"}>¿QUIEN SOMOS?</Link>
                        </li>
                        <li className='topListItem'>
                            <Link to={"/"}>CONTACTO</Link>
                        </li>

                        <li className='topListItem'>
                        <Link to={"/write"}>
                            {user && "WRITE"}
                            </Link>
                        </li>
                        
                        <li className='topListItem' onClick={handleLogout}>
                            {user && "LOGOUT"}
                        </li>
                    </ul>
                </div>
               <div className='topRight'>
                  {user ? (
                    < Link to="/settings">
                            <img
                                className='topImg'
                                src={user.profilePic}
                                alt='topImg'
                            />
                            </Link>
                        ) : (
                            <ul className='topList'>
                                <li className='topListItemLogin' id='link'>
                                    <Link to={"/login"}>LOGIN</Link>
                                </li>
                                <li className='topListItemRegister' id='link'>
                                    <Link to={"/register"}>REGISTER</Link>
                                </li>
                            </ul>
                        )}
                    <i className='topSearchIcon fas fa-search'></i>
                </div>
            </div>
        </>
    )
}
