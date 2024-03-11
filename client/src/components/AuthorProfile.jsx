import {BsFillEnvelopeFill} from "react-icons/bs";
import { useState , useEffect } from "react"; 
import axios from 'axios'; 
import { be_url } from '/config'; 
import { useNavigate } from "react-router-dom"; 

function AuthorProfile(){
    
    let navigate = useNavigate(); 
    let [userId , setUserId] = useState(null) ;  
    let [user , setUser] = useState(null) ;
    let [blogs , setBlogs] = useState(null) ;

        useEffect(()=>{
            let urlParams = new URLSearchParams(window.location.search) ; 

            setUserId(urlParams.get("userId")) ;
        } , [])
    
        useEffect(()=>{ 

            if(userId)
            {axios.post(be_url + "/authorprofile" , {userId} , {withCredentials : true})
    
            .then((res)=>{
    
                console.log(res.data);
                setUser(res.data.user);
                setBlogs(res.data.blogs);
    
                })
    
            .catch((err)=>{
                console.log(err);
    
                if(err.response.status == 401 || err.response.status == 498){
                    navigate("/login");
                }
            }) 
        }
    
        },[userId])


    if(user && blogs){    

        {console.log("user>> "  , user) ;  console.log("blogs>> "  , blogs) ;}

    return(
        <main id="authorprofile-component">
            <div id="authorprofile-details">
                <div id="authorprofile-details-wrap">
                    <div className="profile-pic-div" id="authorprofile-profile-pic-div">
                        <img className="profile-pic" src={user.profilePic}></img>
                    </div>
                    <div>
                        <div className="authorprofile-numbercount">
                            <div>
                                <span>posts</span>
                                <span>{user.postsCount}</span>
                            </div>
                            <div>
                                <span>followers</span>
                                <span>{user.followerCount}</span>
                            </div>
                            <div>
                                <span>following</span>
                                <span>{user.followingCount}</span>
                            </div>
                        </div>
                    </div>
                    <div id="authorprofile-btn-wrap">
                        <button id="authorprofile-follow-btn">follow</button>
                        <button id="authorprofile-message-btn">
                            <BsFillEnvelopeFill/>
                        </button>                        
                    </div>
                    <span id="authorprofile-bio-span">Bio</span>
                    <div id="authorprofile-bio">

                        {user.bio}
                    </div>
                </div>
            </div>

            <div id="authorprofile-details-mobile">

                <div id="authorprofile-blue-mobile">
                    <div className="profile-pic-div" id="authorprofile-profile-pic-div-mobile">
                        <img className="profile-pic" src={user.profilePic}></img>
                    </div>
                </div>

                <div id="authorprofile-details-wrap-mobile">
                   
                        <div id="authorprofile-numbercount-mobile" className="authorprofile-numbercount ">
                        <div>
                                <span>posts</span>
                                <span>{user.postsCount}</span>
                            </div>
                            <div>
                                <span>followers</span>
                                <span>{user.followerCount}</span>
                            </div>
                            <div>
                                <span>following</span>
                                <span>{user.followingCount}</span>
                            </div>
                    </div>
                    <div id="authorprofile-btn-wrap">
                        <button id="authorprofile-follow-btn">follow</button>
                        <button id="authorprofile-message-btn">
                            <BsFillEnvelopeFill/>
                        </button>                        
                    </div>
                    <span id="authorprofile-bio-span">Bio</span>
                    <div id="authorprofile-bio">
                        {user.bio}
                    </div>
                </div>
            </div>

            <div id="authorprofile-posts">
            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="images/tn-1.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>

            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="images/tn-2.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>


            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="images/tn-3.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>            

                
            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="images/tn-4.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>

            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="images/tn-5.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div> 

                <div className="blog-card">
                        <div className="bc-tbnl-div">
                            <img className="bc-tbnl" src="images/tn-6.jpg"></img>
                        </div>
                        <div className="bc-description">
                            <div className="profile">
                                <div className="profile-pic-div bc-profile-pic-div">
                                    <img className="profile-pic" src="images/jay.jpg"></img>
                                </div>
                                <p className="bc-author">Jay Kapadia</p>
                            </div>
                            
                            <p className="bc-title">correct way to learn react</p>
                            <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                        </div>
                    </div>

                    <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="images/tn-1.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>

            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="images/tn-2.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>


            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="images/tn-3.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>            

                
            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="images/tn-4.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>

            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="images/tn-5.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div> 

                <div className="blog-card">
                        <div className="bc-tbnl-div">
                            <img className="bc-tbnl" src="images/tn-6.jpg"></img>
                        </div>
                        <div className="bc-description">
                            <div className="profile">
                                <div className="profile-pic-div bc-profile-pic-div">
                                    <img className="profile-pic" src="images/jay.jpg"></img>
                                </div>
                                <p className="bc-author">Jay Kapadia</p>
                            </div>
                            
                            <p className="bc-title">correct way to learn react</p>
                            <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                        </div>
                    </div>
            </div>
        </main>
    )
}}

export default AuthorProfile