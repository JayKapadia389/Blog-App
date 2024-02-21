import {useRef, useState , useEffect , useContext} from 'react';
import MyPosts from './MyPosts.jsx';
import LikedPosts from './LikedPosts.jsx';
import SavedPosts from './SavedPosts.jsx';
import {BsPlusLg} from 'react-icons/bs';
import { userContext } from '../contexts/userContext';
import axios from 'axios'; 
import { be_url } from '/config'; 
import { useNavigate } from "react-router-dom"; 

function UserProfile(){
    
    // let user = useContext(userContext);
    let navigate = useNavigate(); 
    let [user , setUser] = useState(null) ;

    let underline = useRef();
    let [page,setPage] = useState(0);
    let [ham, setHam] = useState(false);

    useEffect(()=>{
        let data = JSON.parse(window.localStorage.getItem("user")) ;

        console.log("data > userp" , data) ;

        setUser(data) ;
      } , [])

    function changeSection(n){

        if(n== 0)
        underline.current.style.left = `calc(10% + (67.6px * ${n}))`;

        else if(n==1)
        underline.current.style.left = `calc(10% + (67.6px * ${n}) + 73.35px)`;

        else
        underline.current.style.left = `calc(10% + (67.6px * ${n}) + 73.35px + 84.71px)`;

        (n == 0) ? setPage(0) : ( (n == 1) ? setPage(1) : setPage(2)) 

    }

    if(user){

        return(
            <main id="userprofile-component">
    
                <div id="userprofile-details">

                    <div id="userprofile-details-wrap">
    
                        <div className="profile-pic-div" id="userprofile-profile-pic-div">
                            <img className="profile-pic" src={user.profilePic}></img>
                        </div>
    
                        <div id="userprofile-only-details">
    
                                <div id='userprofile-hamburger-menu' 
                                     style={ham ? {"transform" : "translateX(-200px)"} : {"transform" : "translate(0px)"}}   >

                                        <ul id='userprofile-hamburger-options-list'>

                                            <li className='userprofile-hamburger-options'>
                                                <button onClick={()=>{navigate("/editprofile")}}>Edit profile</button>
                                            </li>
                                            <li className='userprofile-hamburger-options'>
                                                <button>Log out</button>
                                            </li>

                                        </ul>
    
                                </div>
    
                                <p id="userprofile-name">
                                    <span>{user.firstName}</span> <span>{user.lastName}</span>
                                </p>
    
                                <div id="userprofile-email-wrap">
                                    <p id="userprofile-email">
                                        {user.emailId}
                                    </p>
                                </div>
    
                                <div id="userprofile-numbercount-wrap">
                                    <div id="userprofile-numbercount" className="userprofile-numbercount ">
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

                        <div className='userprofile-bio'>
                            {user.bio}
                        </div>
    
                    </div>
    
                </div>

                <div id="userprofile-handles-wrap">

                    <div id='userprofile-hamburger-menu-icon-div'
                         onClick={()=>{setHam(!ham) ;console.log(ham)}}>
                        <div id={ ham ? "ham-1-open" : "ham-1-close"} 
                             className='hamburger-lines'></div>
                        <div id={ ham ? "ham-2-open" : "ham-2-close"} 
                             className='hamburger-lines'></div>
                        <div id={ ham ? "ham-3-open" : "ham-3-close"} 
                             className='hamburger-lines'></div>
                    </div>

                </div>
    
                </div>
    
                <div id="userprofile-navbar-wrap">
                    <div id="userprofile-navbar">
    
                        <button className="userprofile-navbar-btn" 
                                id="userprofile-navbar-myposts"
                                onClick={()=>{
                                    changeSection(0 , 73.35);
                                }}>
                                    my posts
                        </button>
                        <button className="userprofile-navbar-btn" 
                                id="userprofile-navbar-likedposts"
                                onClick={()=>{
                                    changeSection(1 , 84.71);
                                }}>
                                    liked posts
                        </button>
                        <button className="userprofile-navbar-btn" 
                                id="userprofile-navbar-savedposts"
                                onClick={()=>{
                                    changeSection(2 , 96.74);
                                }}>
                                    saved posts
                        </button>
    
                    </div>
                </div>
    
                <div id="userprofile-underline-container">
                    <div id="userprofile-underline"
                         ref={underline}></div>
                </div>
    
                {(page == 0) ? <MyPosts/> : (page == 1) ? <LikedPosts/> : <SavedPosts/>}
    
                <button id='userprofile-postarticle-btn' onClick={()=>{navigate("/postarticle")}}>
                    <BsPlusLg id="userprofile-plus-icon"/>
                </button>
                                            
            </main>
        )
    }
    
}

export default UserProfile;