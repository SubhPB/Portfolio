/* -- Byimaan -- */

import React, {useEffect, useRef} from "react";
import { useWheelManager } from "../../Management/Contexts/WheelManagement";

export default function WheelStripe({skill}){

    const wheelManager = useWheelManager();
    const stripeRef = useRef(null);

    const handleClick = () => {
        wheelManager.rotateWheel(skill.rotateVal);
    };

    useEffect( () => {

        if ( wheelManager.getWheelVal() === skill.rotateVal ){
            stripeRef.current.style.opacity = 1;
        } else {
            stripeRef.current.style.opacity = .6;
        };

    },[wheelManager.getWheelVal()]);
    
    return (
        <div onClick={handleClick} ref={stripeRef} className="stripe">
            <div className="stripe-left">
                 <div className="left-dot"></div>
            </div>

            <div className="stripe-right">
                <h3> {skill.skillName} </h3>
                <h4> {skill.skillDesc} </h4>
            </div>
        </div>
    );
};