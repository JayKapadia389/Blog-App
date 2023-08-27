import { useEffect } from "react";

function HomeHeader(){

    useEffect(()=>{
        let homeHeader = document.getElementById("home-header");
    
          document.addEventListener("scroll",()=>{
    
            if((window.scrollY != 0) && !homeHeader.classList.contains('show')){
              homeHeader.classList.add("show");
              homeHeader.classList.remove("hide");
            }
            else if(window.scrollY == 0 && !homeHeader.classList.contains('hide')){
              homeHeader.classList.add("hide");
              homeHeader.classList.remove("show")
            }
          })
      })

    return(
      <header id='home-header' className='hide'>
          <span id="home-header-blogspot" className='blogspot'>
          blogspot
          </span>
        </header>
    )
  
  } 

  export default HomeHeader;