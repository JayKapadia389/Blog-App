import {BsFilter} from "react-icons/bs"
import { BiSort } from "react-icons/bi"
import { useNavigate } from "react-router-dom"; 
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from "react";

function Blogs(props){

    let navigate = useNavigate() ; 
    let [open , setOpen] = useState(true) ;

    function handleBlog(id){

        navigate(`/article?blogId=${id}`) ;
    }

    function parseBody(body){

        let pre = "" ;
        let flag = 0  ;

        for(let i = 0 ; (i < body.length) && (pre.length <= 70) ; i++){

            if(body[i] == '>'){
                flag = 1 ;
            }
            else if(body[i] == '<'){
                flag = 0 ;
            }
            else{
                if(flag){
                    pre += body[i] ;
                }
            }
        }

        if(pre.length > 67){
            pre+="..." ;
        }

        return pre ;


    }

    return(<>

            <div id="blogs-component">

            {props.blogs ?  

                <><div id="filter-sort-wrap">

                    <div id="filter-btn" onClick={() => { props.setFilter(!props.filter); } }>
                        filter
                        <BsFilter id="filter-icon"></BsFilter>
                    </div>

                    <div id="sort-btn">
                        sort
                        <BiSort id="sort-icon"></BiSort>
                    </div>

                </div><div id="blog-cards">

                        {(props.blogs).map((obj) => {

                            return (

                                <div
                                    key={obj.blogId}
                                    onClick={() => { handleBlog(obj.blogId); } }
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
                                        <p className="bc-preview">
                                            {/* the correct way to learn react is not to watch tutorials... */}

                                            {parseBody(obj.body)}

                                            {/* 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1  1 1 1 1 1 1  */}
                                            </p>
                                    </div>
                                </div>
                            );

                        })}

                    </div></>
            
            : 
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
             >
            <CircularProgress color="inherit" />
             </Backdrop>
            }    

    
            </div>
        </>
    )
    
}

export default Blogs