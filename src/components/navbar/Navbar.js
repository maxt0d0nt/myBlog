import './Navbar.css'

import React from 'react'

export const Navbar = () => {
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
            <li className='topListItem'>HOME</li>
            <li className='topListItem'>ABOUT</li>
            <li className='topListItem'>CONTACT</li>
            <li className='topListItem'>WRITE</li>
            <li className='topListItem'>LOGOUT</li>
        </ul>
    </div>
    <div className='topRight'>
        <img 
        className='topImg'
        src='https://images.unsplash.com/photo-1608042245074-36b1114bec2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
        alt='topImg'
        />
    <i className='topSearchIcon fas fa-search'></i>
    </div>
</div>
</>

    )
}
