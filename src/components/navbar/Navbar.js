import './Navbar.css'

import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const user = false;
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
                            {user && "LOGOUT"}
                        </li>
                    </ul>
                </div>
               <div className='topRight'>
                  {/*user ? (
                            <img
                                className='topImg'
                                src='https://images.unsplash.com/photo-1608042245074-36b1114bec2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
                                alt='topImg'
                            />
                        ) : (
                            <ul className='topList'>
                                <li className='topListItemLogin' id='link'>
                                    <Link to={"/login"}>LOGIN</Link>
                                </li>
                                <li className='topListItemRegister' id='link'>
                                    <Link to={"/register"}>REGISTER</Link>
                                </li>
                            </ul>
                        )*/}
                    <i className='topSearchIcon fas fa-search'></i>
                </div>
            </div>
        </>
    )
}
