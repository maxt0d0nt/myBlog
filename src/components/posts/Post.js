import React from 'react'
import { AddPost } from '../AddPost/AddPost'
import './Post.css'

export const Post = ({posts}) => {
  return (
    <>
   <div className='post'>
  {posts.map((p) => (

  <AddPost post={p}/>
  ))}

   </div>
    </>
  )
}
