import {BsFillEnvelopeFill} from "react-icons/bs"
function AuthorProfile(){

    return(
        <main id="authorprofile-component">
            <div id="authorprofile-details">
                <div id="authorprofile-details-wrap">
                    <div className="profile-pic-div" id="authorprofile-profile-pic-div">
                        <img className="profile-pic" src="/public/images/alexander.jpg"></img>
                    </div>
                    <div>
                        <div className="authorprofile-numbercount">
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
                    <div id="authorprofile-btn-wrap">
                        <button id="authorprofile-follow-btn">follow</button>
                        <button id="authorprofile-message-btn">
                            <BsFillEnvelopeFill/>
                        </button>                        
                    </div>
                    <span id="authorprofile-bio-span">Bio</span>
                    <div id="authorprofile-bio">
                    Founder of Convince & Convert, a digital media and marketing company. NY Times best-selling author, global keynote speaker. New book: Hug Your Haters
                    </div>
                </div>
            </div>

            <div id="authorprofile-details-mobile">

                <div id="authorprofile-blue-mobile">
                    <div className="profile-pic-div" id="authorprofile-profile-pic-div-mobile">
                        <img className="profile-pic" src="/public/images/alexander.jpg"></img>
                    </div>
                </div>

                <div id="authorprofile-details-wrap-mobile">
                   
                        <div id="authorprofile-numbercount-mobile" className="authorprofile-numbercount ">
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
                    <div id="authorprofile-btn-wrap">
                        <button id="authorprofile-follow-btn">follow</button>
                        <button id="authorprofile-message-btn">
                            <BsFillEnvelopeFill/>
                        </button>                        
                    </div>
                    <span id="authorprofile-bio-span">Bio</span>
                    <div id="authorprofile-bio">
                    Founder of Convince & Convert, a digital media and marketing company. NY Times best-selling author, global keynote speaker. New book: Hug Your Haters
                    </div>
                </div>
            </div>

            <div id="authorprofile-posts">
            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="/public/images/tn-1.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="/public/images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>

            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="/public/images/tn-2.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="/public/images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>


            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="/public/images/tn-3.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="/public/images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>            

                
            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="/public/images/tn-4.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="/public/images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>

            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="/public/images/tn-5.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="/public/images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div> 

                <div className="blog-card">
                        <div className="bc-tbnl-div">
                            <img className="bc-tbnl" src="/public/images/tn-6.jpg"></img>
                        </div>
                        <div className="bc-description">
                            <div className="profile">
                                <div className="profile-pic-div bc-profile-pic-div">
                                    <img className="profile-pic" src="/public/images/jay.jpg"></img>
                                </div>
                                <p className="bc-author">Jay Kapadia</p>
                            </div>
                            
                            <p className="bc-title">correct way to learn react</p>
                            <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                        </div>
                    </div>

                    <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="/public/images/tn-1.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="/public/images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>

            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="/public/images/tn-2.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="/public/images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>


            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="/public/images/tn-3.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="/public/images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>            

                
            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="/public/images/tn-4.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="/public/images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>

            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="/public/images/tn-5.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="profile">
                            <div className="profile-pic-div bc-profile-pic-div">
                                <img className="profile-pic" src="/public/images/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div> 

                <div className="blog-card">
                        <div className="bc-tbnl-div">
                            <img className="bc-tbnl" src="/public/images/tn-6.jpg"></img>
                        </div>
                        <div className="bc-description">
                            <div className="profile">
                                <div className="profile-pic-div bc-profile-pic-div">
                                    <img className="profile-pic" src="/public/images/jay.jpg"></img>
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
}

export default AuthorProfile