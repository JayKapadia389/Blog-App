import {useEffect , useState} from 'react';
import axios from 'axios'; 
import { be_url } from '/config'; 
import { useNavigate } from "react-router-dom"; 

function EditProfile(){

    let navigate = useNavigate();
    let [data ,setData] = useState('')

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
        }) // path

    },[]);

    return(
        <div>
            {data}
        </div>
    )
}

export default EditProfile;