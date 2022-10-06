import React from 'react'
import './Single.css'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { SinglePost } from '../../components/SinglePost/SinglePost'

export const Single = () => {
  return (
    <>
    <div className='single'>
      <SinglePost />
      <Sidebar />
    </div>
    </>
  )
}
