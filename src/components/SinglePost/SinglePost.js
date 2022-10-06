import React from 'react'
import './SinglePost.css'

export const SinglePost = () => {
    return (
        <>
            <div className='singlePost'>
                <div className='singlePostWrapper'>
                    <img
                        src='https://images.unsplash.com/photo-1664263724040-fc877e716506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt='sinlePostImg'
                        className='singlePostImg'
                    />
                    <h1 className='singlePostTitle'>
                        Laboris tempor pariatur aliqua pariatur et est esse veniam veniam cillum esse minim velit excepteur.
                        <div className='singlePostEdit'>
                            <i className='singlePostIcon far fa-edit'></i>
                            <i className='singlePostIcon far fa-trash-alt'></i>
                        </div>
                    </h1>
                    <div className='singlePostInfo'>
                        <span className='singlePostAuthor'>
                            Autor: <b>Max</b>
                        </span>
                        <span className='singlePostDate'>1 hour ago</span>
                        </div>
                        <p className='singlePostDesc'>Quis dolore velit anim duis aute aliquip incididunt ullamco Lorem. Lorem occaecat in reprehenderit aliqua. Esse qui consequat Lorem enim amet sit culpa eu et cupidatat qui. Ipsum in sunt magna laborum. Non do aliquip magna id occaecat veniam esse ex fugiat.
                            Mollit duis sunt aliqua aliquip elit ea veniam. Excepteur est laboris fugiat proident consectetur nisi. Quis excepteur ea minim ipsum officia consequat ullamco. Exercitation elit nulla irure minim mollit incididunt magna incididunt consectetur adipisicing. Ex duis labore incididunt culpa consectetur.
                            Reprehenderit reprehenderit minim id labore minim exercitation dolor enim ad. Magna mollit laborum id reprehenderit elit ipsum labore voluptate qui consectetur. Et ullamco excepteur sunt aute irure laboris aute quis eiusmod. Irure commodo sunt occaecat aliqua tempor in fugiat.
                            Duis commodo commodo voluptate voluptate elit fugiat irure dolore cillum reprehenderit fugiat laborum magna officia. Aliqua nisi officia quis ex ex incididunt do officia Lorem. Nostrud in eiusmod ullamco excepteur cillum veniam irure. Quis amet occaecat ullamco fugiat ad pariatur nostrud laborum. Est ex labore labore magna consectetur dolor culpa irure.
                        </p>
                </div>
            </div>
        </>
    )
}
