import {useEffect, useRef , useState} from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import axios from 'axios' ;
import { be_url } from '/config'; 
// import {userContext} from '../contexts/userContext';

function ExploreHeader(){
    
    let previousScroll = 0;
    let navigate = useNavigate();
    let [profilePic , setProfilePic] = useState(null) ;
    let [searchActive , setSearchActive] = useState(false) ;

        useEffect(()=>{

          let exploreHeader = document.getElementById("explore-header");

          if(exploreHeader){

              document.addEventListener("scroll",()=>{
    
                let currentScroll = window.scrollY;
    
                if(((currentScroll - previousScroll) > 0) 
                && !exploreHeader.classList.contains('hide')
              ){
                  exploreHeader.classList.add("hide");
                  exploreHeader.classList.remove("show");
                }
                else if(((currentScroll - previousScroll) < 0) 
                && !exploreHeader.classList.contains('show')
              ){
                  exploreHeader.classList.add("show");
                  exploreHeader.classList.remove("hide")
                }
                previousScroll = currentScroll;
              })

          }

      } , ) ;

      useEffect(()=>{

        axios.get(be_url + "/explore-header" , {withCredentials : true})
    
            .then((res)=>{
    
                setProfilePic(res.data.profilePic);

                })
    
            .catch((err)=>{
    
                if(err.response.status == 401 || err.response.status == 498){
                    navigate("/login");
                }
            })

      } , [])

      useEffect(()=>{
        let searchBarDiv = document.getElementById("search-bar-div") ;

        if(searchActive){

          searchBarDiv.classList.add("search-bar-div-active") ;
          searchBarDiv.classList.remove("search-bar-div-inactive") ;
          
        }
        else{
          searchBarDiv.classList.add("search-bar-div-inactive") ;
          searchBarDiv.classList.remove("search-bar-div-active") ;

        }
        
      } , [searchActive])

          return(

            <div>
              <header id="explore-header" className='show'>

                  <span id="explore-header-blogspot"className="blogspot">
                    blogspot
                  </span>
      
                  <div id="search-bar-div">
                  <input id="search-bar" type="search" placeholder="Search..." 
                  onClick={()=>{setSearchActive(true)}}/>
                  <AiOutlineSearch id="search-icon"/>
                  </div>

                  <div id='search-bar-btn-for-mobile' 
                  onClick={()=>{setSearchActive(true)}}
                  >

                  <AiOutlineSearch id="search-icon-mobile"/>
                  </div>

                  <div id ="search-bar-bg" 
                    style={{display : searchActive ? "block" : "none" }}
                    className={searchActive ? "search-bar-bg-active" : "search-bar-bg-inactive"}
                  onClick={()=>{setSearchActive(false)}}

                    ></div>
      
                  <div className='empty'></div>
      
                  <div id="header-profile-btn" onClick={()=>{ navigate("/userprofile"); console.log("userprofile")}}>
                    <img className="profile-pic" 
                    // src={user.userState.profilePic}
                    src={profilePic ? profilePic : null}
                    ></img>
                  </div>

                  
              </header>

              </div>
          )
      

}

export default ExploreHeader;

