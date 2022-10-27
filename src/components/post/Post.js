import React from "react";
import "./Post.css";
import { deleteData } from "../../redux/actions/postActions";
import { connect } from "react-redux";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditPost from "../editPost/EditPost"

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleLike: "fa fa-heart-o postBottomIcon",
      styleSave: "fa fa-bookmark-o postBottomRight",
      open:false,
      open2:false,
    };
  }
  handleClickOpen2 = () => {
    this.setState({ open2: !this.state.open2 });
};
  handleClickOpen = () => {
    this.setState({ open: true });
};
handleClose=()=>{
  this.setState({ open: false});
}
  handleClickLike = () => {
   
    this.state.styleLike === "fa fa-heart-o postBottomIcon"
      ? this.setState({ styleLike: "fa fa-heart postBottomIconClick" })
      : this.setState({ styleLike: "fa fa-heart-o postBottomIcon" });
  };
  handleClickSave = () => {
   
    this.state.styleSave === "fa fa-bookmark-o postBottomRight"
      ? this.setState({ styleSave: "fa fa-bookmark postBottomRight" })
      : this.setState({ styleSave: "fa fa-bookmark-o postBottomRight" });
  };
  
  render() {
    // const { deleteData } = this.props;
    console.log(this.props.post);
    return (
      <>
        <div className="post">
          <div className="postTop">
            <img
              src={this.props.post.img}
              alt="postImage"
              className="postTopIcon"
            />
            <span className="postTopIconRight">
              
                <i
                  className="singlePostIcon fa fa-pencil-square-o"
                  aria-hidden="true"
                  onClick={this.handleClickOpen2}
                ></i>
              

              <i
                className="singlePostIcon fa fa-trash"
                aria-hidden="true"
                onClick={()=>{this.handleClickOpen()}}
              ></i>
            </span>
          </div>
          <img
            src={this.props.post.img}
            alt="postImage"
            className="postImage"
          />

          <div className="postBottom">
            <div>
              <i
                class={this.state.styleLike}
                aria-hidden="true"
                onClick={this.handleClickLike}
              ></i>
            </div>

            <div title={this.props.post.desc}>
              {this.props.post.desc.slice(0, 35)}
              {this.props.post.desc.length > 35 ? " ..." : ""}
            </div>
            <div>
              <i
                class={this.state.styleSave}
                aria-hidden="true"
                onClick={this.handleClickSave}
              ></i>
            </div>
          </div>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to delete this post?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>{this.handleClose()}}>Cancel</Button>
            <Button onClick={()=>{this.props.deleteData(this.props.post.id)}}>Continue</Button>
          </DialogActions>
        </Dialog>
        <EditPost id={this.props.post.id} open={this.state.open2} onClose={this.handleClickOpen2} img={this.props.post.img} post={this.props.post} />
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  deleteData: (id) => dispatch(deleteData(id)),
});

export default connect(null, mapDispatchToProps)(Post);
