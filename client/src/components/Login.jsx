import "../styles/login.css"

function Login() {

    return(
        
            <form id="login-form">
                <h2>Blogspot</h2>
                <input type="text" className="auth-input"></input>
                <input type="text" className="auth-input"></input>

                <button id="login-button">Log In</button>
            </form>
    )
}

export default Login