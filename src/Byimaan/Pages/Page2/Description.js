/* -- Byimaan -- */ 

import React,{useRef, useEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

export default function Description({desc,reverse=null}){

    const descArray = desc.split(' ');
    const descRef = useRef(null);
    
    gsap.registerPlugin(ScrollTrigger);
    useEffect( () => {
        
        const descCurr = descRef.current;
        const lines = descCurr.querySelectorAll('.line-elem-p') ?? null;

        if (reverse){
            descCurr.classList.add('rev')
        };

        if (lines){

            gsap.to(lines,{
                scrollTrigger: {
                   trigger: descCurr,
                   scroller: 'body',
                   toggleActions: 'restart pause resume pause', 
                   start: 'top center', 
                //    onEnterBack: () => restartLines(),
                //    onLeave: () => resetLines(),
                   onLeaveBack: () => resetLines(),   
                //    onEnter: () => restartLines(),
                },
                top: 0,
                duration: .2,
                delay: .2,
                ease: 'power2.inOut',
                stagger: .01,
            });
    
            function resetLines(){
                gsap.to(lines,{
                    top: '2.1vmax',
                    duration: 0.2,
                    ease: 'power2.in',
                })
            };
    
            function restartLines(){
                gsap.to(lines,{
                    top: 0,
                    duration: .2,
                    delay: .2,
                    ease: 'power2.inOut',
                    stagger: .01,
                })
            };

        };

        return () => {
            if (reverse){
                descCurr.classList.remove('rev')
            };

            if (lines){
                gsap.set(lines, { top: '2.1vmax' });
            };
        };

    },[])

    return (
        <div ref={descRef} className="p2-desc">
            { descArray.map( (text,index) => <LineDesc key={index} text={text} /> ) }
        </div>
    );
};

export function LineDesc({text}){

    return (
        <div className="line-p desc">
            <div className="line-elem-p p">
                {text}
            </div>
        </div>
    )
};