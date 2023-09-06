import { AiOutlineHeart } from "react-icons/ai"
import { AiFillHeart } from "react-icons/ai"
import { PiShareNetworkBold } from "react-icons/pi"
import { BsBookmark } from "react-icons/bs"
import { BsBookmarkFill } from "react-icons/bs"
import {useState} from "react";

function Article(props){

    let [liked,setLiked] = useState(false); 
    let [saved,setSaved] = useState(false); 

    return(
        <main id="article-component">
            
            <div id="article-tbnl-div">
                <img id="article-tbnl" src="images/react.webp"></img>
            </div>

            <div className="profile">
                <div className="profile-pic-div article-profile-pic-div">
                    <img className="profile-pic" src="images/jay.jpg"></img>
                </div>

                <div>
                    <p id="article-author">Jay kapadia</p>
                    <p id="article-time">5 days ago</p>
                </div>

                <div className="empty"></div>

                <div id="article-follow-wrap">

                    <button id="article-follow-btn">Follow</button>

                </div>
            </div>

            <h1 id="article-title">5 React useState Mistakes That Will Get You Fired</h1>

            <div id="article-body">

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, id minus nesciunt perferendis corrupti exercitationem quis iste nobis quos esse consequuntur et doloremque inventore repellendus odio quia architecto ex similique.
                <br/>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id exercitationem corporis consectetur, perferendis tempora nemo doloremque excepturi minima perspiciatis libero sed. Hic corporis, odio ex ducimus officia eaque. Quod, minus quo. Et cum minima alias distinctio laboriosam nemo inventore ut id mollitia quos non molestias soluta blanditiis, reiciendis repudiandae quisquam laudantium quasi doloribus molestiae perspiciatis voluptas beatae consequuntur sunt voluptates! Sit, vel! At iste consequuntur, consequatur laborum dolor culpa cum vero distinctio cumque maxime doloribus nihil soluta corporis praesentium perferendis voluptas aliquid tenetur optio commodi nisi ad. Alias expedita aliquam nesciunt. Magnam officia, repellat nulla error dolorem fuga tenetur voluptatibus?
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem excepturi sint pariatur, itaque officiis illum unde tempore repellat, aut natus cumque eius mollitia doloremque quaerat ex asperiores cum perspiciatis maxime repudiandae qui odio. Id quidem, rem recusandae unde dolores fugit eum odit quas nisi praesentium obcaecati consectetur! Est, optio possimus quasi ullam autem quisquam nemo magni temporibus! Blanditiis, aut ducimus!
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, alias modi nemo sed saepe facilis quae quas laudantium voluptates expedita.
                <br/>

            </div>

            <div id="interaction-bar">
                <span>
                    { liked ? <AiFillHeart onClick={()=>{ setLiked(!liked)}}/> : <AiOutlineHeart onClick={()=>{ setLiked(!liked)}}/>}
                </span>

                <span className="empty">
                    
                </span>

                <span>
                    <PiShareNetworkBold/>
                </span>

                <span>
                     { saved ? <BsBookmarkFill onClick={()=>{ setSaved(!saved)}}/> : <BsBookmark onClick={()=>{ setSaved(!saved)}}/>}  
                </span>

            </div>

            <div id="comment-section">

                <input type="text" 
                       id="comment-input"
                       placeholder="Write a comment..."/>

                <h3>Comments</h3>

                <div id="all-comments">

                <div className="comment-wrap">

                    <div className="profile">

                        <div className="profile-pic-div comment-profile-pic-div">
                            <img className="profile-pic" src="images/jay.jpg"></img>
                        </div>

                        <div >
                            <p className="comment-author">jay kapadia</p>
                            <p className="comment-time">2 days ago</p>
                        </div>

                    </div>

                    <p className="comments">Actually, I also use presentational and containers Pattern for UI re-usability in NextJS rather than traditional components. </p>

                    <span>
                        { liked ? <AiFillHeart onClick={()=>{ setLiked(!liked)}}/> : <AiOutlineHeart onClick={()=>{ setLiked(!liked)}}/>}
                    </span>

                </div>

                <div className="comment-wrap">

                    <div className="profile">

                        <div className="profile-pic-div comment-profile-pic-div">
                            <img className="profile-pic" src="images/jay.jpg"></img>
                        </div>

                        <div >
                            <p className="comment-author">jay kapadia</p>
                            <p className="comment-time">2 days ago</p>
                        </div>

                    </div>

                    <p className="comments">Actually, I also use presentational and containers Pattern for UI re-usability in NextJS rather than traditional components. </p>

                    <span>
                        { liked ? <AiFillHeart onClick={()=>{ setLiked(!liked)}}/> : <AiOutlineHeart onClick={()=>{ setLiked(!liked)}}/>}
                    </span>

                </div>

                <div className="comment-wrap">

                    <div className="profile">

                        <div className="profile-pic-div comment-profile-pic-div">
                            <img className="profile-pic" src="images/jay.jpg"></img>
                        </div>

                        <div >
                            <p className="comment-author">jay kapadia</p>
                            <p className="comment-time">2 days ago</p>
                        </div>

                    </div>

                    <p className="comments">Actually, I also use presentational and containers Pattern for UI re-usability in NextJS rather than traditional components. </p>

                    <span>
                        { liked ? <AiFillHeart onClick={()=>{ setLiked(!liked)}}/> : <AiOutlineHeart onClick={()=>{ setLiked(!liked)}}/>}
                    </span>

                </div>

                <div className="comment-wrap">

                    <div className="profile">

                        <div className="profile-pic-div comment-profile-pic-div">
                            <img className="profile-pic" src="images/jay.jpg"></img>
                        </div>

                        <div >
                            <p className="comment-author">jay kapadia</p>
                            <p className="comment-time">2 days ago</p>
                        </div>

                    </div>

                    <p className="comments">Actually, I also use presentational and containers Pattern for UI re-usability in NextJS rather than traditional components. </p>

                    <span>
                        { liked ? <AiFillHeart onClick={()=>{ setLiked(!liked)}}/> : <AiOutlineHeart onClick={()=>{ setLiked(!liked)}}/>}
                    </span>

                </div> 

                </div>      

            </div>
            
        </main>
    )
}

export default Article;