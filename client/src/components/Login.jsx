
function Login() {

    return(

        <div className="auth-wrap">

            <form className="auth-form">

                <h2 className='blogspot auth-blogspot' >blogspot</h2>

                <label htmlFor='email'>email-Id</label>
                <input type="text" className="auth-input"></input>

                <label htmlFor='pwd'>password</label>
                <input type="text" className="auth-input"></input>

                <button id="login-btn">Log In</button>

                <div className='or-wrap'>
                    <div className='line'></div>
                    <div className='or'>or</div>
                    <div className='line'></div>
                </div>

                <button id="login-w-google-btn">login with google</button>

                <p className='auth-extra'><a href="#">forgot password?</a></p>

                <p className='auth-extra'>dont have an account? <a href="/signup">create</a></p>

            </form>

        </div>    
    )
}

export default Login