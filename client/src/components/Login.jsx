import { useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { be_url } from '/config';
import axios from 'axios';

function Login() {

    let [emailId,setEmailId] = useState("");
    let [password,setPassword] = useState("");  
    let navigate = useNavigate();

    // useEffect(()=>{
    //     console.log(emailId);
    //     console.log(password);

    // },[emailId , password])

    function login(e){

        e.preventDefault();

        if(emailId == "" || password == ""){
            //error => please enter the fields
        }
        else{
            axios.post(be_url + "/login" , { emailId , password} , { withCredentials : true})
                  .then((res)=>{
                    if(res.data.code == 1){
                        console.log(res.data.message)
                    }
                    else{
                        navigate("/explore");
                    }
                  }) 
                  .catch((err)=>{
                    console.log(err);
                  }) 
        }

    }

    return(

        <div className="auth-wrap">

            <form className="auth-form">

                <h2 className='blogspot auth-blogspot' >blogspot</h2>

                <label htmlFor='email'>email-Id</label>
                <input id="email"
                       type="email" 
                       className="auth-input"
                       onChange={(e)=>{ setEmailId(e.target.value)}}></input>

                <label htmlFor='pwd'>password</label>
                <input id="pwd" 
                       type="password" 
                       className="auth-input"
                       onChange={(e)=>{ setPassword(e.target.value)}}></input>

                <button id="login-btn"
                        onClick={login}>Log In</button>

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