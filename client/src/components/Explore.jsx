import { useState , useEffect } from "react"; 
import ExploreHeader from "./ExploreHeader.jsx";
import ForYou from "./ForYou.jsx";
import Following from "./Following.jsx";
import axios from 'axios'; 
import { be_url } from '/config'; 
import { useNavigate } from "react-router-dom"; 

function Explore(){

    let [foryouFollowingToggle , setForyouFollowingToggle] = useState("foryou");

    return(

        <div id = "explore-wrap">

            <ExploreHeader></ExploreHeader>

            <div id = "explore-main">

                <div id="foryou-following-wrap">

                        <button id="foryou-btn"
                            className={foryouFollowingToggle == "foryou" ? "active" : null}
                            onClick={() => { setForyouFollowingToggle("foryou"); } }>
                            for you
                        </button>

                        <button id="following-btn"
                            className={foryouFollowingToggle == "following" ? "active" : null}
                            onClick={() => { setForyouFollowingToggle("following"); } }>
                            following
                        </button>

                </div>

                {foryouFollowingToggle == "foryou" ? <ForYou/> : <Following/>}

            </div>

        </div>
    )
}

export default Explore ;