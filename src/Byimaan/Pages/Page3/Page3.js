/* -- Byimaan -- */

import React from "react";
import { useRefManager } from "../../Management/Contexts/ReferenceProvider";
import WheelManagement from "../../Management/Contexts/WheelManagement";
import { PanelBox, SkillBox } from "./Boxes";
import Wheel from "./Wheel";
import './page-3.css';

export default function Page3(){

    const page3Ref = useRefManager().page3;


    // const handleMouseEnter = () => {
    //     crsrRef.textContent = ''
    //     var t1 = gsap.timeline();
    //     t1.to( crsrRef, {
    //         scale: 0,
    //         duration: 1,
    //         ease: 'power2.inOut',
    //         backgroundImage: `url('${window.location.origin}/logo512.png')`
    //     }).to( crsrRef, {
    //         scale: 1,
    //         duration: 1,
    //     })
    // };

    // const handleMouseLeave = () => {
    //     crsrRef.textContent = 'Click Me';

    //     var t1 = gsap.timeline();

    //     t1.to( crsrRef, {
    //         scale: 0,
    //         duration: 1,
    //         ease: 'power2.inOut',
    //         backgroundImage: 'none',
    //     }).to( crsrRef, {
    //         scale: 1,
    //         duration: 1,
    //         ease: 'power2.inOut',
    //     })
    // };

    return (
        <div className="page three" ref={page3Ref} >
            <WheelManagement>

               <Wheel/>
               <PanelBox/>
               <SkillBox/>

            </WheelManagement>
    
        </div>
    );
};