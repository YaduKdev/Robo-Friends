import React from "react";
import SearchBox from "./SearchBox";
import "./Header.css";


const Header = ({searchChange}) => {
    return (
        <div>
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChangePass={searchChange} />
        </div>
    );
}


export default Header;