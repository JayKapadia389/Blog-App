import { useEffect } from "react";

function HomeHeader(){

    useEffect(()=>{
        let info = document.getElementById("info");
        let homeHeader = document.getElementById("home-header");
    
          document.addEventListener("scroll",()=>{
    
            if((window.scrollY != 0) && !homeHeader.classList.contains('show')){
              homeHeader.classList.add("show");
              homeHeader.classList.remove("hide");
    
              info.classList.add('info-shadow');
    
            }
            else if(window.scrollY == 0 && !homeHeader.classList.contains('hide')){
              homeHeader.classList.add("hide");
              homeHeader.classList.remove("show")
    
              info.classList.remove('info-shadow');
    
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