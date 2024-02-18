import {useEffect , useState , useContext} from 'react';
import axios from 'axios'; 
import { be_url } from '/config'; 
import { useNavigate } from "react-router-dom"; 
import { userContext } from "../contexts/userContext"; 

// initial value of input jay

function EditProfile(){

    let navigate = useNavigate();
    let [data ,setData] = useState('');
    let [firstName , setFirstName] = useState("");
    let [lastName , setLastName] = useState("");
    let [bio , setBio] = useState("");
    let user = useContext(userContext);

    useEffect(()=>{ 
    
        axios.get(be_url + "/editprofile" , {withCredentials : true})

        .then((res)=>{

            setData(res.data);

            })

        .catch((err)=>{
            console.log(err);

            if(err.response.status == 401 || err.response.status == 498){
                navigate("/login");
            }
        }) 

    },[]);

    function handleSubmit(e){

        e.preventDefault();

        axios.post(be_url + "/editprofile" , { firstName , lastName , bio} , {withCredentials : true})
             .then((res)=>{
                if((res.data.code) === 2){

                    console.log(res.data.user);

                    user.setUserState(res.data.user) ;

                    navigate("/userprofile");
                }
                else{
                    console.error(res.data.message);
                }
             })
             .catch((err)=>{
                console.error(err);
             })
    }

    if(user){

        return(
    
            <main id="editprofile-component">
                <form id="editprofile-form">
    
                    <div className="profile-pic-div" id='editprofile-image-div'>
                        <img className="profile-pic" src='images/alexander.jpg'/>
                    </div>    
    
                    <label id="editprofile-profilepic-input-label" htmlFor="editprofile-profilepic-input">change profile picture</label>
                    <input id="editprofile-profilepic-input" type="file"/>
    
                    <label HtmlFor="editprofile-firstname-input">first name</label>
                    <input id="editprofile-firstname-input" type="text" placeholder = {user.userState.firstName} onChange={(e)=>{ setFirstName(e.target.value)}}></input>
    
                    <label HtmlFor="editprofile-lastname-input" >last name</label>
                    <input id="editprofile-lastname-input" type="text" placeholder = {user.userState.lastName} onChange={(e)=>{ setLastName(e.target.value)}}></input>
    
                    <label HtmlFor='editprofile-bio-input'>bio</label>
                    <input id="editprofile-bio-input" type='textarea' placeholder = {user.userState.bio} onChange={(e)=>{ setBio(e.target.value)}}></input>
    
                    <div id="editprofile-submit-btn-wrap">
                        <button id="editprofile-submit-btn" type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
    
    
                </form>
            </main>
        )

    }

}

export default EditProfile;