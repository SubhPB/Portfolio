/* -- Byimaan -- */ 

import React from "react";
import './page-5.css';
import P5Middle from "./P5Mid";
import P5Bottom from "./P5Bottom";

export default function Page5(){

    return (
        <div className="page five">
            <P5Top/>
            <P5Middle/>
            <P5Bottom/>
        </div>
    );

};


function P5Top(){

    const handleClick = () => { window.location.href = "mailto:byimaan1@gmail.com";  };

    return (
        <div className="p5-top">
            <div className="p5-top-left">
                <h2> Take It Easy. </h2>
                <h2> I'm Here! </h2>
            </div>

            <h2 onClick={handleClick} className="p5-top-right"> Let's Talk <i className="ri-arrow-right-up-fill"></i> </h2>     
       </div>
    );
}