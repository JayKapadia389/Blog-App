import { useState } from "react";
import ExploreHeader from "./ExploreHeader.jsx";
import {BsFilter} from "react-icons/bs"
import { BiSort } from "react-icons/bi"
import {IoClose} from "react-icons/io5"

function Explore(){

    let [filter , setFilter] = useState(false);

    return(
        <div id="explore-wrap">

            <div id="explore-layer" 
            style={{"filter" : filter ?  "blur(8px)" :  "none" } }
            >
                <ExploreHeader></ExploreHeader>

                <main id="explore-main">
                    <div id="filter-sort-wrap">
                        
                        <div id="filter-btn" onClick={()=>{setFilter(!filter)}}>
                            filter
                            <BsFilter id="filter-icon"></BsFilter>
                        </div>

                        <div id="sort-btn">
                            sort
                            <BiSort id="sort-icon"></BiSort>
                        </div>

                    </div>
                    
                    <div id="cards">
                        <div className="card">
                            <div className="thumbnail">
                                <img className="tbnl" src="/src/assets/tn-1.jpg"></img>
                            </div>
                            <div className="description">
                                <div className="profile">
                                    <div className="profile-pic-div">
                                        <img className="profile-pic" src="/src/assets/jay.jpg"></img>
                                    </div>
                                    <p className="author">Jay Kapadia</p>
                                </div>
                                
                                <p className="title">correct way to learn react</p>
                                <p className="preview">the correct way to learn react is not to watch tutorials...</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="thumbnail">
                                <img className="tbnl" src="/src/assets/tn-2.jpg"></img>
                            </div>
                            <div className="description">
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="thumbnail">
                                <img className="tbnl" src="/src/assets/tn-3.jpg"></img>
                            </div>
                            <div className="description">
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="thumbnail">
                                <img className="tbnl" src="/src/assets/tn-4.jpg"></img>

                            </div>
                            <div className="description">
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="thumbnail">
                                <img className="tbnl" src="/src/assets/tn-5.jpg"></img>

                            </div>
                            <div className="description">
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="thumbnail">
                                <img className="tbnl" src="/src/assets/tn-6.jpg"></img>

                            </div>
                            <div className="description">
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                        </div>


                    </div>
                    
                </main>
            </div>
            <div id="filter-dialogbox-wrap" style={{"display" : filter ?  "grid" :  "none"}}>
                <div id="filter-dialogbox">
                        <IoClose className="close-btn" onClick={()=>{ setFilter(!filter) }}></IoClose>

                        <div id="filter-sections-wrap">
                            <div className="filter-sections" id="upload-date-section">
                                <div className="filter-section-headings">upload date</div>
                                <ul id="upload-date-list">
                                    <li>
                                        <input type='radio' id="today" name="upload-date" value="today"/>
                                        <label htmlFor="today">today</label>
                                    </li>

                                    <li>
                                        <input type='radio' name="upload-date" value="this week"/>
                                        <label htmlFor="this week">this week</label>
                                    </li>

                                    <li>
                                        <input type='radio' name="upload-date" value="this month"/>
                                        <label htmlFor="this month">this month</label>
                                    </li>

                                    <li>
                                        <input type='radio' name="upload-date" value="this year"/>
                                        <label htmlFor="this year">this year</label>
                                    </li>
                                </ul>
                            </div>

                            <div className="filter-sections" id="duration-section">
                                <div className="filter-section-headings">duration</div>
                                <div> 
                                    less than <input type="number" id="duration" name="duration"/> minutes
                                </div>
                                
                            </div>

                            <div className="filter-sections" id="categories-section">
                                <div className="filter-section-headings">categries</div>
                                <ul>
                                    
                                </ul>
                            </div>

                        </div>
                </div>
            </div>
        </div>
    )
}

export default Explore; 