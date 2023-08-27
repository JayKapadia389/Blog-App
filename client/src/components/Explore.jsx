import { useState } from "react";
import ExploreHeader from "./ExploreHeader.jsx";
import {BsFilter} from "react-icons/bs"
import { BiSort } from "react-icons/bi"

function Explore(){

    let [filter , setFilter] = useState(false);

    return(
        <div id="explore-wrap">

            <div id="explore-layer" style={{"filter" : filter ?  "blur(8px)" :  "none" , 
                                            "z-index" : filter ? 99999999 : -10} }>
                <ExploreHeader></ExploreHeader>

                <main id="explore-main">
                    <div id="filter-sort-wrap">
                        <button id="filter-btn" onClick={()=>{ console.log("cenvrb"); setFilter(filter => !filter)}}>
                            filter
                        </button>
                        <BsFilter id="filter-icon"></BsFilter>

                        <button id="sort-btn">
                            sort
                        </button>
                        <BiSort id="sort-icon"></BiSort>
                    
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
            <div id="filter-dialogbox-wrap">
                <div id="filter-dialogbox" style={{"display" : filter ?  "block" :  "none"}}>
                        filtermfrmfrgrn
                </div>
            </div>
        </div>
    )
}

export default Explore; 