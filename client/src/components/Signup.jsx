import {useState, useRef ,useEffect} from 'react';

function Signup() {

    return(

        <div className="auth-wrap">

            <form className="auth-form">

                <h2 className='blogspot auth-blogspot' >blogspot</h2>

                <div id="username-wrap">
                    <label htmlFor='first-name'>first name
                    <input id="first-name" className="auth-input"></input>
                    </label>
                    <label htmlFor='last-name'>last name
                    <input id="last-name" className="auth-input"></input>
                    </label>
                </div>

                <label htmlFor='email'>email-Id</label>
                <input id="email" className="auth-input"></input>

                {/* <label htmlFor='username'>username</label>
                <input id="username" className="auth-input"></input> */}

                <label htmlFor='pwd'>password</label>
                <input id="pwd" className="auth-input"></input>

                <label htmlFor='c-pwd'>confirm-password</label>
                <input id="c-pwd" className="auth-input"></input>

                <button id="signup-btn">Create account</button>

                <div className='or-wrap'>
                    <div className='line'></div>
                    <div className='or'>or</div>
                    <div className='line'></div>
                </div>

                <button id="signup-w-google-btn">signup with google</button>

                <p>already have an account? <a href="/login">login</a></p>

            </form>



        </div>

    )
}

export default Signup