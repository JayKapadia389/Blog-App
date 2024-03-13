import {BsFilter} from "react-icons/bs"
import { BiSort } from "react-icons/bi"
import { useNavigate } from "react-router-dom"; 
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from "react";

function Blogs(props){

    let navigate = useNavigate() ; 

    function handleBlog(id){

        navigate(`/article?blogId=${id}`) ;
    }

    return(<>

            <div id="blogs-component">

            <div id="filter-sort-wrap">
                
                <div id="filter-btn" onClick={()=>{props.setFilter(!props.filter)}}>
                    filter
                    <BsFilter id="filter-icon"></BsFilter>
                </div>

                <div id="sort-btn">
                    sort
                    <BiSort id="sort-icon"></BiSort>
                </div>

            </div>

            <div id="blog-cards">

                {(props.blogs).map((obj)=>{

                    return(

                        <div 
                        key = {obj.blogId}
                        onClick={()=>{handleBlog(obj.blogId)}}
                        className="blog-card"
                        >
                            <div className="bc-tbnl-div">
                                <img className="bc-tbnl" src={obj.coverImgURL}></img>
                            </div>
                            <div className="bc-description">
                                <div className="profile">
                                    <div className="profile-pic-div bc-profile-pic-div">
                                        <img className="profile-pic" src={obj.profilePic}></img>
                                    </div>
                                    <p className="bc-author">{obj.firstName} {obj.lastName}</p>
                                </div>
                                
                                <p className="bc-title">{obj.title}</p>
                                <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                            </div>
                        </div>
                    )

                })}

                </div>

            </div>
        </>
    )
    
}

export default Blogs