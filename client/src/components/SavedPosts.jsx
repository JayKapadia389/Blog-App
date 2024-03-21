import axios from 'axios'; 
import { be_url } from '/config'; 
import { useNavigate } from "react-router-dom"; 
import { useState , useEffect } from "react"; 

function SavedPosts(){

    let [posts , setPosts] = useState(null) ;
    let navigate = useNavigate() ;

    useEffect(()=>{

        axios.get(be_url + "/savedposts" , {withCredentials : true})
    
            .then((res)=>{

                console.log(res.data) ;
    
                 setPosts(res.data.posts) ;
    
                })
    
            .catch((err)=>{
                console.log(err);
    
                if(err.response.status == 401 || err.response.status == 498){
                    navigate("/login");
                }
            })

    } ,[])

    function handleBlog(id){

        navigate(`/article?blogId=${id}`) ;
    }

    if(posts){

    return(
        <div id='savedposts'>

            {posts.map((post)=>{
                return(
                    <div key={post.blogId} onClick={()=>{handleBlog(post.blogId)}} className="blog-card">
                            <div className="bc-tbnl-div">
                                <img className="bc-tbnl" src={post.coverImgURL}></img>
                            </div>
                            <div className="bc-description">
                                <div className="profile">
                                    <div className="profile-pic-div bc-profile-pic-div">
                                        <img className="profile-pic" src={post.profilePic}></img>
                                    </div>
                                    <p className="bc-author">{post.firstName} {post.lastName}</p>
                                </div>
                                
                                <p className="bc-title">{post.title}</p>
                                <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                            </div>
                        </div>
                )
            })} ;    

        </div>
    )
    }
}

export default SavedPosts;