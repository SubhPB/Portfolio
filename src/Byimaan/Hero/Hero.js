/* -- Byimaan -- */

import React,{useEffect} from "react";
import gsap from "gsap";
import { useRefManager } from "../Management/Contexts/ReferenceProvider";
import { useMsgManager } from "../Management/Contexts/MsgProvider";
import Page1 from "../Pages/Page1/Page1";
import Page2 from "../Pages/Page2/Page2";
import Page3 from "../Pages/Page3/Page3";
import Page4 from "../Pages/Page4/Page4";
import Page5 from "../Pages/Page5/Page5";
import './hero.css';

export default function Hero(){

    const heroRef = useRefManager().hero;
    const crsrRef = useRefManager().crsr.current;
    const sendSMS = useMsgManager().sendSMS;

    const handleClick = () => {
        sendSMS();
    };

    const handleMove = (e) => {
        if (crsrRef){
            gsap.to(crsrRef,{
                top: e.pageY - 30 + 'px',
                left: e.pageX - 30 + 'px',
            });
        };
    };

    return(
        <div ref={heroRef} onClick={handleClick}  onMouseMove={handleMove} className="hero">
            <Cursor/>
            <Page1/>
            <Page2/>
            <Page3/>
            <Page4/>
            <Page5/>
        </div>
    )
};

export function Cursor(){

    return (
        <div ref={useRefManager().crsr} className="cursor">
             Click Me 
        </div>
    );
};