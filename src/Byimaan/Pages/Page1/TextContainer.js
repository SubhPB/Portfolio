/* -- Byimaan -- */

import React, { useRef } from "react";
import H1FlipLineWrapperPage1 from "./FlipLine";
import gsap from "gsap";
import Quotes from "./Quotes";
import './text-container.css';

export default function TextContainerP1(){

    //  here we will write the logic to flip the text
    const txtContainer = useRef(null);
    const currLineIndex = useRef(0);
    const isAnimating = useRef(false);

    const handleClick = () => {
        
        const lines = txtContainer.current.querySelectorAll('.line');
        
        if (!isAnimating.current){
            isAnimating.current = true;
            let animationsCompleted = 0;

            lines.forEach( line => {
                const children = line.children;
                var innerIndex = {current: 0};
    
                // hiding the current line...
                gsap.to(children[innerIndex.current + currLineIndex.current],{
                    top: '-=100%',
                    duration: 1,
                    ease: 'power3.inOut',
                    onComplete: function(){
                        gsap.set(this._targets[0],{
                            top: '100%'
                        });
                        animationsCompleted++;

                        // Check if all animations are completed
                        if (animationsCompleted === lines.length) {
                            isAnimating.current = false;
                        }
                    }
                });
    
                currLineIndex.current === 2 ? innerIndex.current = -2 : innerIndex.current++;
    
                // revealing the new line...
                gsap.to(children[innerIndex.current + currLineIndex.current],{
                    top: '-=100%',
                    duration: 1,
                    ease: 'power3.inOut',
                });
            });
            currLineIndex.current === 2 ? currLineIndex.current = 0 : currLineIndex.current++;
        };
    };

    return (
        <div onClick={handleClick} ref={txtContainer} className="container p1">
            <H1FlipLineWrapperPage1/>
            <Quotes/>
            <ExploreBtn/>
        </div>
    )
};

function ExploreBtn(){
    return (
        <div className="explore-btn">
            <h3>EXPLORE <i className="ri-corner-right-down-fill"></i></h3>
        </div>
    );
}