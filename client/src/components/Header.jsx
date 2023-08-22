import { useEffect } from "react";

function Header(){

    useEffect(()=>{
        let info = document.getElementById("info");
    
          document.addEventListener("scroll",()=>{
    
            console.log(header.classList.contains('top'));
    
            if((window.pageYOffset != 0) && !header.classList.contains('middle')){
              header.classList.add("middle");
              header.classList.remove("top");
    
              info.classList.add('info-shadow');
    
            }
            else if(window.pageYOffset == 0 && !header.classList.contains('top')){
              header.classList.add("top");
              header.classList.remove("middle")
    
              info.classList.remove('info-shadow');
    
            }
          })
      })

    return(
      <header id='header' className='top'>
          <span id="header-blogspot" className='blogspot'>
          blogspot
          </span>
        </header>
    )
  
  } 

  export default Header;