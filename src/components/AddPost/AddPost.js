import './AddPost.css'

import React from 'react'

export const AddPost = () => {
    return (
        <>
                <div className='addPost'>
                    <img
                        className='postImg'
                        src='https://images.unsplash.com/photo-1664263724040-fc877e716506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt='imgPost'
                    />
                    <div className='postInfo'>
                        <div className='postCats'>
                            <span className='postCat'>Music</span>
                            <span className='postCat'>Music</span>
                            <span className='postCat'>Music</span>
                            <span className='postCat'>Music</span>
                        </div>
                        <span className='postTitle'>
                            Eiusmod nisi consectetur Lorem cillum consectetur exercitation voluptate.
                        </span>
                        <hr />
                        <span className='postDate'>1 hour ago</span>
                    </div>
                    <p className='postDescription'>
                        Consectetur cupidatat quis mollit in do aute et. Minim do proident officia ex. Cillum esse quis pariatur ex reprehenderit voluptate elit excepteur ullamco Lorem et. Nostrud dolor culpa elit do officia reprehenderit minim culpa. Esse ea id voluptate culpa elit occaecat deserunt id. Dolor qui sint proident veniam. Excepteur deserunt consectetur commodo laboris id ipsum irure mollit.
                    </p>
                </div>
            
        </>
    )
}
