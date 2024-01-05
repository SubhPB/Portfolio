/* -- Byimaan -- */

import React, {useRef, useEffect} from "react";
import gsap from "gsap";
import { LineDesc } from "../Page2/Description";

export default function P5Bottom(){

    const p5BtmRef = useRef(null);

    useEffect(() => {
        const targets = p5BtmRef.current.querySelectorAll('.line-elem-p');

        if (targets){
            gsap.to( targets, {
                scrollTrigger: {
                    trigger: p5BtmRef.current,
                    scroller: 'body',
                    start: 'top 85%',
                    toggleActions: 'restart pause resume pause', 

                    onLeaveBack: () => {
                        gsap.to(targets,{
                            top: '-45vmin',
                            duration: .5,
                            stagger: -.1,
                            ease: 'power2.inOut'
                        })
                    }
                },
                top: 0,
                duration: .7,
                stagger: .1,
                ease: 'power1.inOut'
            })
        }
    },[]);

    return (
        <div ref={p5BtmRef} className="p5-btm">
            <LineDesc text={"B"}/> <LineDesc text={"Y"} /> <LineDesc text={"I"} /> <LineDesc text={"M"}/> <LineDesc text={"A"}/> <LineDesc text={"A"} /> <LineDesc text={"N"}/>
        </div>
    );

};