import React from 'react'
import { Header } from '../../components/header/Header'
import { Post } from '../../components/posts/Post'
import { Sidebar } from '../../components/sidebar/Sidebar'
import './Home.css'

export const Home = () => {
  return (
    <>
      < Header />
      <div className='home'>
        < Post />
        < Sidebar />
      </div>
    </>

  )
}
