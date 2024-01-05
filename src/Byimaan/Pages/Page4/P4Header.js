/* -- Byimaan -- */

import React, {useRef, useEffect} from "react";
import gsap from "gsap";
import { LineDesc } from "../Page2/Description";

export default function P4Header(){

    const [ txtBoxRef, arrowRef ] = [ useRef(null), useRef(null) ];

    useEffect( () => {
        const targets = txtBoxRef.current.querySelectorAll('.line-elem-p') ?? null;

        if (targets && arrowRef.current){

            gsap.set(arrowRef.current,{ opacity: 0 });

            gsap.to( targets, {
                scrollTrigger: {
                    trigger: txtBoxRef.current,
                    scroller: 'body',
                    start: 'top 55%',
                },
                top: 0,
                duration: .9,
                ease: 'power2.inOut',
                onComplete: () => {
                    gsap.to(arrowRef.current,{
                        opacity: 0.84,
                        duration: .4,
                        ease: 'power2.inOut'
                    })
                },
            });
        };

        return () => {
            if (targets && arrowRef.current){
                gsap.set(targets,{ top: '5vmax' });
            };
        }
    },[]);

    function Arrow(){
        return (
            <div ref={arrowRef} className="arrow">
                <i className="ri-arrow-right-up-line"></i>
            </div>
        );
    };

    return (
        <div className="p4-heading">

            <div ref={txtBoxRef} className="p4-heading-box">
                <div className="p4-headline">
                    <LineDesc text="Let's"/>
                    <LineDesc text="Collaborate"/>
                </div>

                <div className="p4-headline">
                    <LineDesc text="For"/>
                    <LineDesc text="Next"/>
                    <LineDesc text="Big"/>
                    <LineDesc text="Thing!."/> 
                </div>
            </div>

            <Arrow />

        </div>
    );
};