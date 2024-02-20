import {useEffect , useState , useContext , useRef} from 'react';
import axios from 'axios'; 
import { be_url } from '/config'; 
import { useNavigate } from "react-router-dom"; 
import { userContext } from "../contexts/userContext"; 
import { MdEdit } from "react-icons/md";

// initial value of input jay

function EditProfile(){

    let navigate = useNavigate();
    let user = useContext(userContext)
    let [firstName , setFirstName] = useState(user.userState.firstName);
    let [lastName , setLastName] = useState(user.userState.lastName);
    let [bio , setBio] = useState(user.userState.bio);
    let [profilePic , setProfilePic] = useState(null) ;
    let fileInputRef = useRef(null) ;

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

    function uploadimage(){

        let image = new FormData();
        image.append('file', profilePic);
        image.append('upload_preset','expense-tracker')
        image.append('cloud_name','dgqba5trl')

        return axios.post("https://api.cloudinary.com/v1_1/dgqba5trl/image/upload",image)
    }

    function handleSubmit(e){

        e.preventDefault();

        let ppURL = null ;

        if(profilePic){
            uploadimage()
            .then((res)=>{
                console.log(res.data.url) ;
                ppURL = res.data.url ;
            })
            .catch((err)=>{
                console.error(err) ;
            })

        }

        axios.post(be_url + "/editprofile" , { firstName , lastName , bio , ppURL} , {withCredentials : true})
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

    function handleProfilePicChange(e){ // inline

        setProfilePic(e.target.files[0]) ;

    }

    function handleEditProfilePic(){

        fileInputRef.current.click() ;
    }

    if(user){

        return(
    
            <main id="editprofile-component">
                <form id="editprofile-form">

                    <div id = "editprofile-image-div-wrap">

                        <div className="profile-pic-div" id='editprofile-image-div'>
                            <img className="profile-pic" src={profilePic ? URL.createObjectURL(profilePic) : user.userState.profilePic}/>
                        </div>    

                        <div id='edit-profilepic-icon-div' onClick={handleEditProfilePic} >
                            <MdEdit id="edit-profilepic-icon"/>
                            <input id="editprofile-profilepic-input" type="file" ref = {fileInputRef} onChange={handleProfilePicChange}/>
                        </div>

                    </div>
    
    
                    {/* <label id="editprofile-profilepic-input-label" htmlFor="editprofile-profilepic-input">change profile picture</label> */}
    
                    <label htmlFor="editprofile-firstname-input">first name</label>
                    <input id="editprofile-firstname-input" type="text" value = {firstName} onChange={(e)=>{ setFirstName(e.target.value)}}></input>
    
                    <label htmlFor="editprofile-lastname-input" >last name</label>
                    <input id="editprofile-lastname-input" type="text" value = {lastName} onChange={(e)=>{ setLastName(e.target.value)}}></input>
    
                    <label htmlFor='editprofile-bio-input'>bio</label>
                    <input id="editprofile-bio-input" type='textarea' value = {bio} onChange={(e)=>{ setBio(e.target.value)}}></input>
    
                    <div id="editprofile-submit-btn-wrap">
                        <button id="editprofile-submit-btn" type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
    
    
                </form>
            </main>
        )

    }

}

export default EditProfile;