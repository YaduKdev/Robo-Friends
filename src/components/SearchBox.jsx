import React from "react";


const SearchBox = ({searchChangePass}) => {
    return (
        <div className="pa2">
            <input
            className="pa3 ba b--green bg-lightest-blue" 
            type="search" 
            placeholder="search robots" 
            onChange={searchChangePass}
            />
        </div>
    );
}


export default SearchBox;