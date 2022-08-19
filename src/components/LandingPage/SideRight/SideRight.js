import React from "react";

import "./SideRight.css"
import Search from "./Search/Search";
import PoemGenre from "./PoemGenre/PoemGenre";
import Tips from "./Tips/Tips";

function SideRight() {
    
    return(
        <div className="sideRightContainer">
        <Search />
        <PoemGenre />
        <Tips />
        </div>
    );
}

export default SideRight;