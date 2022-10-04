import React from 'react';
import './Header.css'

export const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>Hablemos de Futbol</span>
            <span className='headerTitleLg'>Red Blog</span>
        </div>
        <img
        className='headerImg'
        src='https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1293&q=80'
        alt='headerImg'
        />

    </div>
    </>
  )
}
