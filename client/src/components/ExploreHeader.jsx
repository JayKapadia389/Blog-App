import {useEffect} from 'react';
import { AiOutlineSearch } from "react-icons/ai";

function ExploreHeader(){
    
    let previousScroll = 0;
    
    useEffect(()=>{
          let exploreHeader = document.getElementById("explore-header");

          console.log(window.scrollY);

          document.addEventListener("scroll",()=>{

            let currentScroll = window.scrollY;
    
            if(((currentScroll - previousScroll) > 0) && !exploreHeader.classList.contains('hide')){
              exploreHeader.classList.add("hide");
              exploreHeader.classList.remove("show");
            }
            else if(((currentScroll - previousScroll) < 0) && !exploreHeader.classList.contains('show')){
              exploreHeader.classList.add("show");
              exploreHeader.classList.remove("hide")
            }
            previousScroll = currentScroll;
          })


      })

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

            <div id="profile-btn">
              <img className="profile-pic" src='/src/assets/jay.jpg'></img>
            </div>
        </header>
    )
}

export default ExploreHeader;

