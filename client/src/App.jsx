import { useState } from 'react'

function App() {

  return (
    <div id="home-bg-image-container">

      <header id='header'>
      </header>

      <div id="signup-login-header">
          <form id="signup-login-wrap">
                <button className="signup-login signup" >SignUp</button>
                <button className="signup-login login" >Login</button>
          </form>
      </div>

      <div id="home-trans-container">
        <div id="home-blogspot-wrap">
          <h1 id="blogspot-h1" className="blogspot">blogspot</h1>
          <h2 id="sub-title">read, write and explore</h2>
        </div>

        <div id="carousel-container">

        </div>
      </div>
    </div>
  )
}

export default App
