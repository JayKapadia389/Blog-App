import { useState } from 'react'

function App() {

  return (
    <div id="home-bg-image-container">
      <div id="home-trans-container">
        <div id="home-blogspot-wrap">
          <h1 id="blogspot-h1" className="blogspot">blogspot</h1>
          <h2 id="sub-title">read, write and explore</h2>
          <form id="signup-login-wrap-main">
            <button className="signup-login-main signup" >SignUp</button>
            <button className="signup-login-main login" >Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
