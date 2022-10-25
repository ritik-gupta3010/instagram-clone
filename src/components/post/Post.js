import React from 'react'
import './Post.css'


export default class post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       styleLike:"fa fa-heart-o postBottomIcon",
       styleSave:"fa fa-bookmark-o postBottomRight"

    }
  }
  
  handleClickLike=(e)=>
  {
    e.preventDefault();
    this.state.styleLike==="fa fa-heart-o postBottomIcon"?this.setState({styleLike:"fa fa-heart postBottomIconClick"}):this.setState({styleLike:"fa fa-heart-o postBottomIcon"})
    
  }
  handleClickSave=(e)=>
  {
    e.preventDefault();
    this.state.styleSave==="fa fa-bookmark-o postBottomRight"?this.setState({styleSave:"fa fa-bookmark postBottomRight"}):this.setState({styleSave:"fa fa-bookmark-o postBottomRight"})
  }
  render()
  {
    return(
        <>
        <div className="post">
          <div className="postTop">
            <i className="fa fa-user-circle-o postTopIcon" aria-hidden="true" > </i>
            <span className="postTopIconRight">
              <a href="/write"><i className="singlePostIcon fa fa-pencil-square-o" aria-hidden="true"></i></a>
              {/* <i className="singlePostIcon fa fa-pencil-square-o" aria-hidden="true"></i> */}
              <i className="singlePostIcon fa fa-trash" aria-hidden="true"></i>
            </span>
          </div>
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="postImage" className='postImage'/>
            <div className="postBottom">
              <i class={this.state.styleLike}  aria-hidden="true" onClick={this.handleClickLike}></i>
              {/* <i class="fa fa-comment-o postBottomIcon" aria-hidden="true"></i>
              <i class="fa fa-paper-plane-o postBottomIcon" aria-hidden="true"></i> */}
              <i class={this.state.styleSave} aria-hidden="true" onClick={this.handleClickSave}></i>
            </div>
        </div>
        </>
    );
  }
}
