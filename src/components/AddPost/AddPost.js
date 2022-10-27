import './AddPost.css'

import React from 'react'

export const AddPost = ({post}) => {
    return (
        <>
                <div className='addPost'>
                    {post.photo && (
                    <img
                        className='postImg'
                        src={post.photo}
                        alt='imgPost'
                    />)}
                    <div className='postInfo'>
                        <div className='postCats'>
                          {post.categories.map((c) =>(
<span className='postCat'>{c.name}</span>
                          ))}
                        </div>
                        <span className='postTitle'>
                            {post.title}
                        </span>
                        <hr />
                        <span className='postDate'>{new Date (post.createdAt).toDateString()}</span>
                    </div>
                    <p className='postDescription'>
                        {post.desc}
                    </p>
                </div>
            
        </>
    )
}
