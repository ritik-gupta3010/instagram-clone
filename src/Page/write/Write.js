import React from 'react'
import './Write.css'


export default class Write extends React.Component {
    render()
    {
        return(
            <>
            <div className="write">
                <form  className="writeForm">
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput"><i class="fa fa-plus writeIcon" aria-hidden="true"></i></label>
                        <input type="file" id='fileInput' style={{display:'none'}}/>
                        <input type="text" placeholder='Write a caption...' className="writeInput" autoFocus={true}/>
                    </div>
                    <div className="writeFormGroup">
                        <textarea placeholder='Write a caption...' type='text' className="writeInput writeText"></textarea>
                    </div>
                    <button className="writeSubmit">add post</button>
                </form>
            </div>
            </>
        );
    }
}
