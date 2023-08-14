import { useEffect, useState } from 'react';


function App() {

  useEffect(()=>{
    let header = document.getElementById("header");
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

  return (
    <>
      <header id='header' className='top'>
        <span id="header-blogspot" className='blogspot'>
        blogspot
        </span>
      </header>

      <div id="signup-login-header">
          <form id="signup-login-wrap">
                <button className="signup-login signup" >SignUp</button>
                <button className="signup-login login" >Login</button>
          </form>
      </div>
    <div id="home-bg-image-container">


      <div id="home-trans-container">
        <div id="home-blogspot-wrap">
          <h1 id="h1-blogspot" className="blogspot">blogspot</h1>
          <h2 id="sub-title">read, write and explore</h2>
        </div>

        <div id="carousel-container">

        </div>
      </div>
    </div>

    <section id="info">
      <div id="block-1">
        <div className = "text">
          <h2 className='home-h2'>share your thoughts</h2>
          <p className="home-p"> just reading blogs can be boring , express your thoughts and interact with others readers through comments. You can also leave a like to let the creator know about their great job. Share the blog with your friends and family.</p>
        </div>
        <div className='image'>

        </div>
      </div>

      <div  id="block-2">
        <div className = "text">
          <h2 className='home-h2'>Connect to your favourite creators</h2>
          <p className="home-p">ever read something so interesting and wished that you could have more of it .well, by following the creator you can make sure that you don’t miss any of their 
updates  . </p>
        </div>
        <div className='image'></div>
      </div>

      <div id="block-3">
        <div className = "text">
          <h2 className='home-h2'>collect  your favourites</h2>
          <p className="home-p"> 
you can access all the liked blogs at one place  </p>
        </div>
        <div className='image'></div>
      </div>
    </section>

    </>
  )
}

export default App
