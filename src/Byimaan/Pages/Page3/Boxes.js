/* -- Byimaan -- */

import React,{ useRef, useEffect } from "react";
import { useWheelManager } from "../../Management/Contexts/WheelManagement";
import { LineDesc } from "../Page2/Description";
import gsap from "gsap";

export function PanelBox({noOfDots=17}){

    const wheelManager = useWheelManager();

    function PanelDot({rotateVal}){

        const dotRef = useRef(null);

        const handleClick = () => {
            wheelManager.rotateWheel(rotateVal);
        };

        useEffect( () => {
            if (wheelManager.getWheelVal() === rotateVal){
                dotRef.current.style.opacity = 1;
            } else {
                dotRef.current.style.opacity = 0.6;
            };
        },[wheelManager.getWheelVal()]);

        return (
            <div onClick={handleClick} ref={dotRef} className="panel-dot"> </div>
        );
    };

    return (
        <div className="page3-panel">
            {
                Array(noOfDots).fill().map( (val,index) => {
                    let rotateVal = 37.5 - (index*7.5);
                    return <PanelDot key={index} rotateVal={rotateVal}/>;
                })
            }
        </div>
    );
};

export function SkillBox(){

    const wheelManager = useWheelManager();
    const skillBoxRef = useRef(null);
    const [skillName,skillDesc] = wheelManager.getSkillInfo();

    useEffect(() => {

        const targets = skillBoxRef.current.querySelectorAll('.line-elem-p');

        gsap.set(targets,{
            top: '2.1vmax',
        });

        gsap.to(targets,{
            top: 0,
            duration: .4,
            ease: 'power1.inOut',
            stagger: .02,
        });

        return () => {     
            gsap.to(targets,{
                top: '2.1vmax',
                duration: .4,
                ease: 'power1.inOut',
                stagger: .02,
            });
        };

    },[wheelManager.getWheelVal()]);



    function SkillName(){

        return (
            <div className="skill-name">
                <LineDesc text={skillName}/>
            </div>
        );
    };

    function SkillDesc(){

        const descArray = skillDesc.split(' ');

        return (
            <div className="skill-desc">
                {
                    descArray.map( (txt,index) => <LineDesc key={index} text={txt} />)
                }
            </div>
        );
    };

    return(
        <div className="skills-wrapper">
            <div ref={skillBoxRef} className="skills-box">
                <SkillName/>
                <SkillDesc/>
            </div>
        </div>
    );

};

