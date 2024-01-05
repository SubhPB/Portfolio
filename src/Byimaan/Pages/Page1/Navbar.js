/* -- Byimaan -- */

import React, { useEffect, useRef} from "react";
import { useMsgManager } from "../../Management/Contexts/MsgProvider";
import gsap from "gsap";

export default function Navbar(){

    return (
        <div className="nav">

            <NavLogo/>

        </div>
    );
};

function NavLogo(){

    const {smsBox} = useMsgManager();
    var [sms1,sms2] = [smsBox.sms1, smsBox.sms2];
    const logoSpans = useRef([]);

    const isAnimating = useRef(false);

    useEffect(() => {

        console.log(" useEffect of NavLogo just activated! ");

        if (!isAnimating.current){

            isAnimating.current = true;
            // Clear existing animations on these elements
            gsap.killTweensOf(logoSpans.current);

            var t1 = gsap.timeline({
                onComplete: () => { isAnimating.current = false; }
            });
            t1.to(logoSpans.current,{
                left: '105%',
                duration: 1.2,
                ease: 'power2.inOut',
                stagger: .1,
            })
            .to(logoSpans.current,{
                left: 0,
                duration: 1.2,
                delay: 1.5,
                ease: 'power2.inOut',
            });
        };

    },[smsBox])

    return(
        <div className="logo">
            <h1 className="logo-h1"> BYIMAAN</h1>
            <div ref={ span => logoSpans.current.push(span) } className="logo-span one"> {sms1} </div>
            <div ref={ span => logoSpans.current.push(span) } className="logo-span two"> {sms2} </div>
        </div>
    );
}