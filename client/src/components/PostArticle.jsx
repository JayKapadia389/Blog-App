import JoditEditor  from 'jodit-react';
import {HiPhoto} from "react-icons/hi2";
import {useRef} from "react";

function PostArticle(){

    let cover = useRef();

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

            </form>
            
        </main>
    )
}

export default PostArticle;