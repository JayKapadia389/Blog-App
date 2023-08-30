import {BsFilter} from "react-icons/bs"
import { BiSort } from "react-icons/bi"

function Blogs(props){

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
                <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="/src/assets/tn-1.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="bc-profile">
                            <div className="bc-profile-pic-div">
                                <img className="bc-profile-pic" src="/src/assets/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>

            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="/src/assets/tn-1.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="bc-profile">
                            <div className="bc-profile-pic-div">
                                <img className="bc-profile-pic" src="/src/assets/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>


            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="/src/assets/tn-1.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="bc-profile">
                            <div className="bc-profile-pic-div">
                                <img className="bc-profile-pic" src="/src/assets/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>            

                
            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="/src/assets/tn-1.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="bc-profile">
                            <div className="bc-profile-pic-div">
                                <img className="bc-profile-pic" src="/src/assets/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>

            <div className="blog-card">
                    <div className="bc-tbnl-div">
                        <img className="bc-tbnl" src="/src/assets/tn-1.jpg"></img>
                    </div>
                    <div className="bc-description">
                        <div className="bc-profile">
                            <div className="bc-profile-pic-div">
                                <img className="bc-profile-pic" src="/src/assets/jay.jpg"></img>
                            </div>
                            <p className="bc-author">Jay Kapadia</p>
                        </div>
                        
                        <p className="bc-title">correct way to learn react</p>
                        <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div> 

                <div className="blog-card">
                        <div className="bc-tbnl-div">
                            <img className="bc-tbnl" src="/src/assets/tn-1.jpg"></img>
                        </div>
                        <div className="bc-description">
                            <div className="bc-profile">
                                <div className="bc-profile-pic-div">
                                    <img className="bc-profile-pic" src="/src/assets/jay.jpg"></img>
                                </div>
                                <p className="bc-author">Jay Kapadia</p>
                            </div>
                            
                            <p className="bc-title">correct way to learn react</p>
                            <p className="bc-preview">the correct way to learn react is not to watch tutorials...</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Blogs