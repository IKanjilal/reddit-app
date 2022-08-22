import React from "react";

const Scroltotop = () => {

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    } 


    return (
        <div>
            <button className="backBtn" onClick={() => handleClick()}  >Scroll to top</button>
        </div>
    )


};



export default Scroltotop;
