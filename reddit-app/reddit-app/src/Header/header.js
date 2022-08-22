import React from "react";
import Search from "./Search";
import reddit from "../img/reddit.png"




const Header = () => {
    
    
    return(
        <div className="header">
            
            <div className="logo">
                <img src={reddit} />
                <a href="https://www.reddit.com" target="_blank" title="GO TO reddit.com">
                <p>redditApp</p>
                </a>
            </div>
            

            <div>
                {<Search />}
            </div>     
           
                 
            
            
        </div>
    )
};

export default Header;