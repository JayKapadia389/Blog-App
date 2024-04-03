import { useState , useEffect } from "react"; 
import ExploreHeader from "./ExploreHeader.jsx";
import axios from 'axios'; 
import { be_url } from '/config'; 
import { useNavigate } from "react-router-dom"; 

function Explore(){

    return(
        <div id = "explore">
            explore
            <ExploreHeader></ExploreHeader>

        </div>
    )
}

export default Explore ;