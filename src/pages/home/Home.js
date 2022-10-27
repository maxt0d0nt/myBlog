import React, { useEffect, useState } from 'react'
import { Header } from '../../components/header/Header'
import { Post } from '../../components/posts/Post'
import { Sidebar } from '../../components/sidebar/Sidebar'
import './Home.css';
import axios from "axios"

export const Home = () => {

const [posts, setPosts] = useState([]);

useEffect (() => {
  const fetchPosts = async () => {
    const res = await axios.get("/posts")
    setPosts(res.data)
  }
  fetchPosts()
},[])

  return (
    <>
      < Header />
      <div className='home'>
        < Post posts={posts}/>
        < Sidebar />
      </div>
    </>

  )
}
