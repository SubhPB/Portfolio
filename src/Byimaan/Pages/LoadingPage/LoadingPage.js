/*  -- Byimaan -- */

import React, {useEffect,useRef} from "react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';
import './loading-page.css';
import useScrollHook from "../Hooks/ScrollHook";

export default function LoadingPage(){

    const [isFreezed,useScroll] = useScrollHook();

    const refs = {
        iLayer: useRef(null),
        iiLayer: useRef(null),
        txtSpans: useRef([]),
        txtTop: useRef(null),
    };

    const rootParent = useRef(null);

    useEffect( () => {

        console.log(' useEffect of LoadingPage started ');
        useScroll.freeze();

        const {txtSpans,txtTop,iLayer,iiLayer} = refs;
        var t1 = gsap.timeline();
        t1.to(txtSpans.current,{
            left: 0,
            stagger: .1,
            ease: 'power1.in',
            delay: .2,
            duration: .5,
            opacity: 1,
        })
        .to(txtSpans.current,{
            top: '-5vmax',
            duration: .9,
            stagger: .15,
            ease: 'power2.inOut',
            onComplete: () => {
                gsap.to(txtTop.current,{
                    opacity: 0,
                    duration: .4,
                    ease: 'power1.inOut'
                });
            }
        })
        .to(iLayer.current,{
            height: '0',
            duration: 2,
            delay: .3,
            ease: 'power2.inOut',
            zIndex: 0
        })
        .to(iiLayer.current,{
            height: '100vh',
            delay: -2,
            duration: 2,
            bottom: '100%',
            ease: 'power2.inOut',
            onComplete: () => {useScroll.unFreeze();}
        });

        return () => { 
            if (isFreezed){
                useScroll.unFreeze();
            }
        };

    },[])

    return (
        <div ref={rootParent} className="initial-animation">
            <div ref={refs.iLayer} className="I-layer">
                <div ref={refs.iiLayer} className="layer-text">
                    <h5 ref={refs.txtTop} className="cntr-top"><i className="ri-copyright-line"></i> 2024 legal </h5>
                    <div className="center-text">
                        <h1 className="cntr-h1">
                            <span ref={ span => refs.txtSpans.current.push(span)} >Byimaan</span>
                            <span ref={span => refs.txtSpans.current.push(span)} >is</span>
                            <span ref={span => refs.txtSpans.current.push(span)} >a</span>
                        </h1>
                    </div>

                    <div className="loading-circle"></div>
                </div>
            </div>
            <div ref={refs.iiLayer} className="II-layer"></div>
        </div>
    );
};

