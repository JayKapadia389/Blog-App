import {useEffect, useContext , useState} from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import axios from 'axios' ;
import {be_url} from '/config' ;
// import {userContext} from '../contexts/userContext';

function ExploreHeader(){
    
    let previousScroll = 0;
    let navigate = useNavigate();
    // let user = useContext(userContext);
    let [profilePic , setProfilePic] = useState(null) ;
     
        useEffect(()=>{

          let exploreHeader = document.getElementById("explore-header");

          // console.log("1" , exploreHeader) ;

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
        // let data = JSON.parse(window.localStorage.getItem("user")) ;

        axios.get(be_url + "/explore-header" , {withCredentials : true})
    
            .then((res)=>{
    
                // console.log(res.data);

                setProfilePic(res.data.profilePic);

                })
    
            .catch((err)=>{
                // console.log(err);
    
                if(err.response.status == 401 || err.response.status == 498){
                    navigate("/login");
                }
            })

        // setUser(data) ;
      } , [])

      if(profilePic){

          return(
              <header id="explore-header" className='show'>
                  <span id="explore-header-blogspot"className="blogspot">
                    blogspot
                  </span>
      
                  <div>
                  <input id="search-bar" type="search" placeholder="Search..." />
                  <AiOutlineSearch id="search-icon"/>
                  </div>
      
                  <div className='empty'></div>
      
                  <div id="header-profile-btn" onClick={()=>{ navigate("/userprofile"); console.log("userprofile")}}>
                    <img className="profile-pic" 
                    // src={user.userState.profilePic}
                    src={profilePic}
                    ></img>
                  </div>
              </header>
          )
      }

}

export default ExploreHeader;

