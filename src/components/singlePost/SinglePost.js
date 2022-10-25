import React from 'react'
import "./SinglePost.css"

export default class SinglePost extends React.Component {
  render(){
    return(
        <>
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                alt="" className="singlePostImage" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                    <i className="singlePostIcon fa fa-pencil-square-o" aria-hidden="true"></i>
                    <i className="singlePostIcon fa fa-trash" aria-hidden="true"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Ritik</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className='singlePostDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ex magni, natus earum voluptate odio numquam? Facere illo inventore dolorum possimus, quasi temporibus. Pariatur amet quas aut accusantium dolor magnam.
                Assumenda possimus dolore alias aperiam. Eius a ex quod quae reiciendis natus, ea nulla illo! Nisi incidunt rerum saepe beatae, id hic ad voluptas consequuntur sunt, consequatur adipisci veniam. Facilis?
                Maiores consequuntur velit laborum sint nostrum nam earum, voluptatibus accusantium illum eos placeat ut, quis quisquam repudiandae perspiciatis fugit in aliquid mollitia adipisci labore eum obcaecati, ipsum consequatur reprehenderit. Labore.
                Autem ad, corrupti impedit esse sequi, quisquam quas sed ea, excepturi corporis eius nobis vel voluptatibus optio magnam? Quo, nemo eos! Cupiditate illo eligendi consequatur maxime facilis vitae perferendis ab.
                A eligendi omnis commodi quibusdam porro nisi doloremque blanditiis cumque labore quis, sequi consectetur repellat quaerat rerum, optio cum nesciunt vero modi eius. Non voluptatibus, distinctio aliquam delectus voluptate qui.
                Quod perferendis corporis, saepe dolore velit, et, impedit consequatur aliquam maiores expedita repellendus necessitatibus distinctio perspiciatis ullam culpa. Sequi dolorum magni sed fugit voluptate error fugiat reprehenderit doloremque ad omnis?
                Dolore, aspernatur nostrum. Eos quo facilis ducimus recusandae sequi! Repellat mollitia delectus earum iste id vel obcaecati minima dicta suscipit? Repudiandae vero architecto fuga expedita veniam ab suscipit omnis error.
                Eos repellat doloribus iure quo earum velit maxime odit error quis natus harum itaque enim odio, aperiam quos! Exercitationem, saepe porro nihil quibusdam adipisci incidunt quam obcaecati unde at! Facilis.
                Quae consectetur, ipsam vitae suscipit earum quod quam inventore aliquam error omnis delectus consequuntur esse dicta, quas non fuga voluptatibus? Tempora, laudantium! Nam quaerat quis, iusto corporis ad velit a!
                Cum quae reiciendis provident inventore, et, repellat alias quis deleniti quod nemo tenetur vel minus impedit porro. Ipsam ipsum cupiditate dignissimos magnam sequi commodi, obcaecati saepe quas suscipit, exercitationem ut?</p>
            </div>
        </div>
        
        </>
    );
  }
}
