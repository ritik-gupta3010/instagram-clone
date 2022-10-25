import React from 'react'
import Post from "../post/Post"
import './Posts.css'
import Story from '../Story/Story';

export default class Posts extends React.Component{
    render()
    {
        return(
            <>
            <div className="posts">
                <Story />
                <Post />
                <Post />
                <Post />
                <Post />
            </div> 
            </>
        );
    }
}
