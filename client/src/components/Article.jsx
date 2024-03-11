import { AiOutlineHeart } from "react-icons/ai"
import { AiFillHeart } from "react-icons/ai"
import { PiShareNetworkBold } from "react-icons/pi"
import { BsBookmark } from "react-icons/bs"
import { BsBookmarkFill } from "react-icons/bs"
import { useState , useEffect } from "react"; //snippet
import axios from 'axios'; //snippet
import { be_url } from '/config'; //snippet
import { useNavigate } from "react-router-dom"; //snippet

function Article(){
    
    let [liked,setLiked] = useState(false); 
    let [saved,setSaved] = useState(false); 
    let [blogId ,setBlogId] = useState(null);
    let [blog , setBlog] = useState(null) ;
    let [user , setUser] = useState(null) ;
    let [viewerIsPoster , setViewerIsPoster] = useState(null) ;

    let navigate = useNavigate(); //snippet

    useEffect(()=>{

        let urlParams = new URLSearchParams(window.location.search) ;

        setBlogId(urlParams.get('blogId')) ; 
    },[])

    useEffect(()=>{ //snippet

        if(blogId){

            axios.post(be_url + "/article" , {blogId}, {withCredentials : true})
    
            .then((res)=>{
    
                console.log(res.data);
                setBlog(res.data.blog) ;
                setUser(res.data.user) ;
                setViewerIsPoster(res.data.viewerIsPoster) ;
    
                })
    
            .catch((err)=>{
                console.log(err);
    
                if(err.response.status == 401 || err.response.status == 498){
                    navigate("/login");
                }
            }) // path

        }

    },[blogId])

    function getTimeStamp(d){

        console.log(d) ;
        console.log(typeof(d)) ;

        let date = new Date(d) ;

        console.log(date) ;
        console.log(typeof(date)) ;

        let today = new Date() ;

        let msDifference =  today.getTime() - date.getTime()  ;

        let daysDifference = Math.floor(msDifference / (1000 * 60 * 60 * 24));

        if(daysDifference > 365){

            if(Math.floor(daysDifference/365) == 1){
                return Math.floor(daysDifference/365) + " year ago" ;
            }
            return Math.floor(daysDifference/365) + " years ago" ;
        }

        else if(daysDifference > 30){

            if(Math.floor(daysDifference/30) == 1){
                return Math.floor(daysDifference/30) + " month ago" ;
            }
            return Math.floor(daysDifference/30) + " months ago" ;
        }

        else if(daysDifference > 6){
            if(Math.floor(daysDifference/7) == 1){
                return Math.floor(daysDifference/7) + " week ago" ;
            }
            return Math.floor(daysDifference/7) + " weeks ago" ;
        }

        else if(daysDifference >= 1 && daysDifference <= 6){
            if(Math.floor(daysDifference) == 1){
                return Math.floor(daysDifference) + " day ago" ;
            }
            return Math.floor(daysDifference) + " days ago" ;
        }

        else if(Math.floor(msDifference / (1000 * 60 * 60)) > 0){
            if(Math.floor(msDifference / (1000 * 60 * 60)) == 1){
                return Math.floor(msDifference / (1000 * 60 * 60)) + " hour ago" ;
            }
            return Math.floor(msDifference / (1000 * 60 * 60)) + " hours ago" ;
        }

        else if(Math.floor(msDifference / (1000 * 60)) > 0){

            if(Math.floor(msDifference / (1000 * 60)) == 1){
                return Math.floor(msDifference / (1000 * 60)) + " minute ago" ;
            }
            return Math.floor(msDifference / (1000 * 60)) + " minutes ago";
        }

        else{
            return Math.floor(msDifference / (1000)) + " seconds ago";
        }
        }
        
    if(blog && user){
        console.log(blog.body);
    return(
        <main id="article-component">
            
            <div id="article-tbnl-div">
                <img id="article-tbnl" src={blog.coverImgURL}></img>
            </div>

            <div className="profile">

                <div className="profile-wrap" 
                
                onClick={()=>{

                    viewerIsPoster ? navigate("/userprofile") : navigate(`/authorprofile?userId=${user.userId}`) ;

                }}> 

                        <div className="profile-pic-div article-profile-pic-div">
                            <img className="profile-pic" src={user.profilePic}></img>
                        </div>

                        <div>
                            <p id="article-author">{user.firstName} {user.lastName}</p>
                            <p id="article-time">{getTimeStamp(blog.date)}</p>
                        </div>

                </div>

                <div className="empty"></div>

                {viewerIsPoster ? null : <div id="article-follow-wrap">

                    <button id="article-follow-btn">Follow</button>

                </div> }
            </div>

            <h1 id="article-title">{blog.title}</h1>

            <div id="article-body" 
            dangerouslySetInnerHTML={{ __html : blog.body}}
            >
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
}

export default Article;