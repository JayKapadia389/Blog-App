import {useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import MyPosts from './MyPosts.jsx';
import LikedPosts from './LikedPosts.jsx';
import SavedPosts from './SavedPosts.jsx';
import {BsPlusLg} from 'react-icons/bs';

function UserProfile(){

    let underline = useRef();
    let [page,setPage] = useState(0);
    let navigate = useNavigate();

    function changeSection(n){

        if(n== 0)
        underline.current.style.left = `calc(10% + (67.6px * ${n}))`;

        else if(n==1)
        underline.current.style.left = `calc(10% + (67.6px * ${n}) + 73.35px)`;

        else
        underline.current.style.left = `calc(10% + (67.6px * ${n}) + 73.35px + 84.71px)`;

        (n == 0) ? setPage(0) : ( (n == 1) ? setPage(1) : setPage(2)) 

    }

    return(
        <main id="userprofile-component">

            <div id="userprofile-details">

                <div id="userprofile-details-wrap">

                    <div className="profile-pic-div" id="userprofile-profile-pic-div">
                        <img className="profile-pic" src="images/alexander.jpg"></img>
                    </div>

                    <div id="userprofile-only-details">

                            <p id="userprofile-name">
                                Jay Kapadia
                            </p>

                            <div id="userprofile-email-wrap">
                                <p id="userprofile-email">
                                    jaykapadia389@gmail.com
                                </p>
                            </div>

                            <div id="userprofile-numbercount-wrap">
                                <div id="userprofile-numbercount" className="userprofile-numbercount ">
                                    <div>
                                        <span>posts</span>
                                        <span>43</span>
                                    </div>
                                    <div>
                                        <span>followers</span>
                                        <span>1441</span>
                                    </div>
                                    <div>
                                        <span>following</span>
                                        <span>435</span>
                                </div>
                            </div>

                    </div>

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

export default UserProfile;