import JoditEditor  from 'jodit-react';
import {HiPhoto} from "react-icons/hi2";
import {useRef} from "react";
import { useState , useEffect } from "react"; 
import axios from 'axios'; 
import { be_url } from '/config'; 
import { useNavigate } from "react-router-dom"; 
import { AiOutlineLoading3Quarters } from "react-icons/ai";
    
function PostArticle(){

    let cover = useRef();

    let navigate = useNavigate(); 
    let publish = document.getElementById("publish-btn") ;
    let [isClicked , setIsClicked] = useState(false) ;

    let [coverImg , setCoverImg] = useState(null) ; 
    let [title , setTitle] = useState("") ; 
    let [body , setBody] = useState("<p><br></p>") ; 
    let [duration , setDuration] = useState("") ; 
    
        useEffect(()=>{ 
    
            axios.get(be_url + "/postarticle" , {withCredentials : true})
    
            .then((res)=>{
    
                // console.log(res.data);
    
                })
    
            .catch((err)=>{
                console.log(err);
    
                if(err.response.status == 401 || err.response.status == 498){
                    navigate("/login");
                }
            }) // path
    
        },[])

        function uploadImage(){

            let image = new FormData() ;

            // console.log(image) ;
            image.append('file' , coverImg);
            image.append('upload_preset','expense-tracker')
            image.append('cloud_name','dgqba5trl')

            return axios.post("https://api.cloudinary.com/v1_1/dgqba5trl/image/upload",image)
            
        }

        async function handleSubmit(e){

            setIsClicked(true) ;

            e.preventDefault() ;
            let coverImgURL ;

            await uploadImage()
            .then((res)=>{
                coverImgURL = res.data.url ;

            })
            .catch((err)=>{
                console.log("cover image upload error : " , err) ;
            })

            // console.log("1" ,coverImgURL) ;
            // console.log("2" ,title) ;
            // console.log("3" ,body) ;
            // console.log("4" ,duration) ;

            axios.post(be_url + "/postarticle" , {coverImgURL , title , body , duration} , {withCredentials : true})
                .then((res)=>{
                    console.log(res.data) ;
                    navigate("/userprofile") ;
                })
                .catch((err)=>{
                    console.log(err) ;
                })
            
        }
        
        function handleFormChange(){

            console.log("hdeu2h") ;
            
            if(publish){

                console.log("1" ,coverImg) ;
                console.log("2" ,title) ;
                console.log("3" ,body) ;
                console.log("4" ,duration) ;

                if(coverImg != null && title != "" && body != "<p><br></p>" && duration != ""){
                    console.log("filled") ;
                    publish.classList.remove("unclickable-btn") ;
    
                }
                else{
                    console.log("3212312")
                    publish.classList.add("unclickable-btn") ;
    
                }

            }
        }

        useEffect(()=>{
            handleFormChange() ;
        }, [coverImg , title , body , duration])

    return(
        <main id="postarticle-component">

            <form id='postarticle-form' 
            // onChange={handleFormChange}
            >

                <div className='postarticle-label-wrap'>
                    <label htmlFor='cover-photo-input'>Cover Photo</label> 
                    {/* <div className='postarticle-errorbox'>
                        <AiOutlineExclamationCircle className='postarticle-errorbox-icon'/>
                    </div> */}

                </div>

                    <input type="file" 
                           id='cover-photo-input'
                           ref={cover}
                            onChange = {(e)=>{ setCoverImg(e.target.files[0])}}
                            >
                    </input>
                <button id='cover-photo-button'
                        onClick={(e)=>{e.preventDefault();
                                       console.log(cover.current.click())}}>
                    <HiPhoto id='cover-photo-icon'/>
                </button>

                <div id="postarticle-coverimg-div" style = {{"display" : (coverImg ? "block" : "none")}}>
                            <img src = {coverImg ? URL.createObjectURL(coverImg) : null}/>
                </div>



                <div className='postarticle-label-wrap'>
                    <label htmlFor="title-input">Title</label>
                    {/* <div className='postarticle-errorbox'>
                            <AiOutlineExclamationCircle className='postarticle-errorbox-icon'/>
                    </div> */}
                </div>

                <input type="text"
                       id="title-input"
                       onChange={(e)=>{setTitle(e.target.value)}}/>   

                <div className='postarticle-label-wrap'>
                    <label htmlFor='jodit-editor'>Body</label>
                    {/* <div className='postarticle-errorbox'>
                                <AiOutlineExclamationCircle className='postarticle-errorbox-icon'/>
                        </div> */}
                </div>       

                <JoditEditor id="jodit-editor"
                onChange={ (e)=>{
                    console.log(e , typeof(e)) ;
                         setBody(e) ;
                    }}   
                />


                <div className='postarticle-label-wrap'>
                    <label htmlFor='duration-input'>Length</label>
                    {/* <div className='postarticle-errorbox'>
                            <AiOutlineExclamationCircle className='postarticle-errorbox-icon'/>
                    </div> */}
                </div>

                <div>
                    <input type='number'
                        id='duration-input'
                        min="1" max="30"
                       onChange={(e)=>{console.log("len",e.target.value , typeof(e.target.value) ) ;setDuration(e.target.value)}}
                       />   
                        
                    <span>minutes</span>
                </div>

                <div id="publish-btn-div">

                    {isClicked ?
                     <div id="publish-btn-loading">

                    <AiOutlineLoading3Quarters className="loading-icon"/>

                    </div> 
                    : 

                    <button id="publish-btn" className="unclickable-btn" 
                    onClick={handleSubmit}
                    >Publish</button> 
                    }      
                </div>


                <div id='red-div'>
                    
                </div>
            </form>
            
        </main>
    )
}

export default PostArticle;