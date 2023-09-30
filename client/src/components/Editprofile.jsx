import {useEffect , useState} from 'react';
import axios from 'axios'; 
import { be_url } from '/config'; 
import { useNavigate } from "react-router-dom"; 

// initial value of input jay

function EditProfile(){

    let navigate = useNavigate();
    let [data ,setData] = useState('');
    let [firstName , setFirstName] = useState("jay");

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

    return(

        <main id="editprofile-component">
            <form id="editprofile-form">

                <div className="profile-pic-div" id='editprofile-image-div'>
                    <img className="profile-pic" src='images/alexander.jpg'/>
                </div>    

                <label id="editprofile-profilepic-input-label" htmlFor="editprofile-profilepic-input">change profile picture</label>
                <input id="editprofile-profilepic-input" type="file"/>

                <label HtmlFor="editprofile-firstname-input">first name</label>
                <input id="editprofile-firstname-input" type="text"></input>

                <label HtmlFor="editprofile-lastname-input" >last name</label>
                <input id="editprofile-lastname-input" type="text"></input>

                <label htmlFor='editprofile-bio-input'>bio</label>
                <input id="editprofile-bio-input" type='textarea'></input>

                <div id="editprofile-submit-btn-wrap">
                    <button id="editprofile-submit-btn" type="submit">Submit</button>
                </div>


            </form>
        </main>
    )
}

export default EditProfile;