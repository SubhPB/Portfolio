/* -- Byimaan -- */

import React from "react";

export function AcademicLink(){

    return (
        <div className="p5-link academic">
            <div className="p5-link-left">
                <i className="ri-graduation-cap-line"></i>
            </div>

            <div className="p5-link-right academic">
                <h2>Associate of Science</h2>
                <h2>in Mathematics, Computer Science</h2>
                <h2> <i className="ri-school-line"></i> Alexander College, Burnaby, BC, Canada.</h2>
            </div>
        </div>
    );
};

export function SocialLink({type,text,email=null,address=null}){

    const handleClick = () => {

        if (email){
            window.location.href = `mailto:${email}`; 
            return;
        }else if (address){
            window.location.href = address;
            return;
        }
    };

    return (
        <div className="p5-link rev">
            <div className="p5-link-left">
                <i className={type}></i>
            </div>

            <div onClick={handleClick} className="p5-link-right social">
                <h2>{text} <i className="ri-arrow-right-up-line"></i></h2>
            </div>
        </div>
    );
};