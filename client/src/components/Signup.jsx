import {useState, useRef ,useEffect} from 'react';
import {AiOutlineExclamationCircle} from "react-icons/ai";

function Signup() {

    // let [email, setEmail] = useState()

    let emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    let passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    let [validEmail , setValidEmail] = useState(true);
    
    let [password , setPassword] = useState("");
    let [validPassword , setValidPassword] = useState(true);

    // let [confirmPassword , setConfirmPassword] = useState("");
    let [validConfirmPassword , setValidConfirmPassword] = useState(true);

    function handleEmailValidity(e){

        if(e.target.value == ""){
            setValidEmail(true);
        }
        else{
            setValidEmail( emailRegex.test(e.target.value));
        }
    }

    useEffect(()=>{

            if(password == ""){
                setValidPassword(true);
            }
            else{
                console.log(password)
                console.log(passwordRegex.test(password));
                setValidPassword( passwordRegex.test(password));
            }
        
    },[password])

    function handleConfirmPassword(e){

        if(e.target.value == ""){
            setValidConfirmPassword(true);
        }
        else{
            setValidConfirmPassword(password == e.target.value);
        }
    }

    return(

        <div className="auth-wrap">

            <form className="auth-form">

                <h2 className='blogspot auth-blogspot' >blogspot</h2>

                <div id="username-wrap">
                    <label htmlFor='first-name'>first name
                    <input id="first-name" 
                           className="auth-input" 
                           type='text' 
                           autoComplete='on'
                           required></input>
                    </label>
                    <label htmlFor='last-name'>last name
                    <input id="last-name" className="auth-input" type='text' required></input>
                    </label>
                </div>

                <label htmlFor='email' type='email'>email-Id</label>
                <input id="email" 
                       className="auth-input" 
                       type='email'
                       required
                       onChange={handleEmailValidity}></input>
                <p className='error-box' style={{ display : validEmail ? "none" : "block"}}>
                    <span className='error-icon-span'><AiOutlineExclamationCircle/></span>
                    email is invalid or already taken 
                </p>

                <label htmlFor='pwd' type="password">password</label>
                <input id="pwd" 
                       className="auth-input" 
                       required
                       type='password'
                       autoComplete='off'
                       onChange={(e)=>{setPassword(e.target.value)}}></input>
                <p className='error-box' 
                   style={{ display : validPassword ? "none" : "block"}}
                   >
                    <span className='error-icon-span'><AiOutlineExclamationCircle/></span>
                    password must be atleast 8 characters long<br/>
                    password must contain atleast 1 uppercase character,1 numeric and 1 special character
                </p>       

                <label htmlFor='c-pwd' type="password">confirm-password</label>
                <input id="c-pwd" 
                       className="auth-input" 
                       required
                       type="password"
                       autoComplete='off'
                       onChange={handleConfirmPassword}></input>

                <p className='error-box' 
                   style={{ display : validConfirmPassword ? "none" : "block"}}
                   >
                    <span className='error-icon-span'><AiOutlineExclamationCircle/></span>
                    should match the above field<br/>
                </p>

                <button id="signup-btn">Create account</button>

                <div className='or-wrap'>
                    <div className='line'></div>
                    <div className='or'>or</div>
                    <div className='line'></div>
                </div>

                <button id="signup-w-google-btn">signup with google</button>

                <p className='auth-extra'>already have an account? <a href="/login">login</a></p>

            </form>



        </div>

    )
}

export default Signup