import {useRef} from 'react';

function UserProfile(){

    let underline = useRef();

    function changeLeft(n){

        if(n== 0)
        underline.current.style.left = `calc(10% + (67.6px * ${n}))`;

        else if(n==1)
        underline.current.style.left = `calc(10% + (67.6px * ${n}) + 73.35px)`;

        else
        underline.current.style.left = `calc(10% + (67.6px * ${n}) + 73.35px + 84.71px)`;

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
                                changeLeft(0 , 73.35);
                            }}>
                                my posts
                    </button>
                    <button className="userprofile-navbar-btn" 
                            id="userprofile-navbar-likedposts"
                            onClick={()=>{
                                changeLeft(1 , 84.71);
                            }}>
                                liked posts
                    </button>
                    <button className="userprofile-navbar-btn" 
                            id="userprofile-navbar-savedposts"
                            onClick={()=>{
                                changeLeft(2 , 96.74);
                            }}>
                                saved posts
                    </button>

                </div>
            </div>

            <div id="userprofile-underline-container">
                <div id="userprofile-underline"
                     ref={underline}></div>
            </div>


        </main>
    )
}

export default UserProfile;