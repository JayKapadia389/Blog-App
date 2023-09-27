import JoditEditor  from 'jodit-react';
import {HiPhoto} from "react-icons/hi2";
import {useRef} from "react";
import { useState , useEffect } from "react"; 
import axios from 'axios'; 
import { be_url } from '/config'; 
import { useNavigate } from "react-router-dom"; 
    
function PostArticle(){

    let cover = useRef();

    let navigate = useNavigate(); 
    
        useEffect(()=>{ 
    
            axios.get(be_url + "/postarticle" , {withCredentials : true})
    
            .then((res)=>{
    
                console.log(res.data);
    
                })
    
            .catch((err)=>{
                console.log(err);
    
                if(err.response.status == 401 || err.response.status == 498){
                    navigate("/login");
                }
            }) // path
    
        },[])

    return(
        <main id="postarticle-component">

            <form id='postarticle-form'>

                <label htmlFor='cover-photo-input'>Cover Photo</label>

                    <input type="file" 
                           id='cover-photo-input'
                           ref={cover}>
                    </input>
                <button id='cover-photo-button'
                        onClick={(e)=>{e.preventDefault();
                                       console.log(cover.current.click())}}>
                    <HiPhoto id='cover-photo-icon'/>
                </button>

                <label htmlFor="title-input">Title</label>
                <input type="text"
                       id="title-input"/>   

                <label htmlFor='jodit-editor'>Body</label>
                <JoditEditor id="jodit-editor"/>

                <label htmlFor='duration-input'>Length</label>

                <div>
                    <input type='number'
                        id='duration-input'
                        min="1" max="30"/> 
                    <span>minutes</span>
                </div>

                <div id="publish-btn-div">
                    <button id="publish-btn">Publish</button>       
                </div>

            </form>
            
        </main>
    )
}

export default PostArticle;