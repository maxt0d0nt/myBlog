import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './SinglePost.css'
import axios from 'axios'

export const SinglePost = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/"


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data)
        };
        getPost()
    }, [path])

    return (
        <>
            <div className='singlePost'>
                <div className='singlePostWrapper'>
                    {post.photo && (
                        <img
                            src={PF + post.photo}
                            alt='sinlePostImg'
                            className='singlePostImg'
                        />
                    )}
                    <h1 className='singlePostTitle'>
                        {post.title}
                        <div className='singlePostEdit'>
                            <i className='singlePostIcon far fa-edit'></i>
                            <i className='singlePostIcon far fa-trash-alt'></i>
                        </div>
                    </h1>
                    <div className='singlePostInfo'>
                        <span className='singlePostAuthor'>
                            Autor: 
                            <Link to={`/?user=${post.username}`} >
                            {post.username}
                            </Link>
                        </span>
                        <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
                    </div>
                    <p className='singlePostDesc'>
                        {post.desc}
                    </p>
                </div>
            </div>
        </>
    )
}
