import React from 'react'
import './Sidebar.css'

export const Sidebar = () => {
  return (
<>
<div className='sidebar'>
    <div className='sidebarItem'>
        <span className='sidebarTitle'>¿QUIEN SOMOS?</span>
        <img
        src='https://images.unsplash.com/photo-1664434341235-f77a94e1a26c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&q=80'
        alt='sidebarImg'
        />
        <p>
        Laboris incididunt occaecat consectetur ullamco irure quis elit cillum. Labore sint ut quis nostrud incididunt ex est officia labore adipisicing magna sunt dolore. Exercitation Lorem irure quis sint do ut quis et minim.
        </p>
    </div>
    <div className='sidebarItem'>
      <span className='sidebarTitle'>CATEGORIAS</span>
      <ul className='sidebarList'>
        <li className='sidebarListItem'>Life</li>
        <li className='sidebarListItem'>Music</li>
        <li className='sidebarListItem'>Style</li>
        <li className='sidebarListItem'>Sport</li>
        <li className='sidebarListItem'>Tech</li>
        <li className='sidebarListItem'>Cinema</li>
      </ul>
    </div>
    <div className='sidebarItem'>
      <span className='sidebarTitle'>SIGUEME</span>
      <div className='sidebarSocial'>
        <i className='sidebarIcon fab fa-facebook-square'></i>
        <i className='sidebarIcon fab fa-twitter-square'></i>
        <i className='sidebarIcon fab fa-pinterest-square'></i>
        <i className='sidebarIcon fab fa-instagram-square'></i>

      </div>
    </div>
</div>
</>
  )
}
