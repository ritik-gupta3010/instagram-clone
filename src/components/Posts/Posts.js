import React from 'react'
import Post from "../post/Post"
import Story from '../Story/Story';
import './Posts.css'

import {connect} from "react-redux"
import {fetchData} from "../../redux/actions/postActions"


class Posts extends React.Component{
    componentDidMount(){
        this.props.fetchData();
    }
    render()
    {
        console.log(this.props.dataObject)
        return(
            <>
            <div className="posts">
                <Story />
                {(this.props.data.length != 0) ? this.props.data && this.props.data.map(post => (
                <Post key={post.id} post={post} />
                )) : <h2 className='error'>Sorry! No Post<br />*Create a new Post and see all your post here*</h2>}
            </div> 
            </>
        );
    }
}


const mapStatetoProps = (state) => {
    console.log(state)
    return { data: state.data, error: state.error, isLoading: state.isLoading, dataObject: state.dataObject };
}

const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(fetchData())
})

export default connect(mapStatetoProps,mapDispatchToProps)(Posts);