/* -- Byimaan -- */

import React from "react";
import WheelStripe from "./WheelStripe";
import { useWheelManager } from "../../Management/Contexts/WheelManagement";


export default function Wheel(){

    const wheelManager = useWheelManager();

    return (
        <div ref={wheelManager.localRefs.wheel} className="skills-circle">

            <FrontendStripes/>
            <CoreStripes/>
            <BackendStripes/>

        </div>
    );
};


function FrontendStripes(){

    const frontendSkills = [
        {skillName: 'UI', skillDesc: '7.1/10'},
        {skillName: 'CSS', skillDesc: '8.7/10'},
        {skillName: 'HTML', skillDesc: '8.8/10'},
        {skillName: 'GSAP', skillDesc: '7.9/10'},
        {skillName: 'AXIOS', skillDesc: '9.1/10'},
        {skillName: 'JavaScript', skillDesc: '# All Time Favourite'}
    ]

    return (
        <div className="stripes frontend">
            { frontendSkills.map( (skill,index) => {
                skill.rotateVal = 37.5 - index*7.5;
                return <WheelStripe key={index} skill={skill}/>;
                }) 
            }
        </div>
    );
};

function CoreStripes(){

    const coreSkills = [
        {skillName: 'Redux', skillDesc: '# State Management'},
        {skillName: 'React', skillDesc: '# JS Library'},
        {skillName: 'Quality', skillDesc: '# Top Most Priority'},
        {skillName: 'Django', skillDesc: '# Backend Framework'},
        {skillName: 'DRF', skillDesc: '# Django Rest Framework'},
        {skillName: 'Mathematics', skillDesc: '# Calculus Lover'}
    ];

    return (
        <div className="stripes core">
            { coreSkills.map( (skill,index) => {
                skill.rotateVal = -7.5 * (index + 1);
                return <WheelStripe key={index} skill={skill}/>;
                }) 
            }
        </div>
    );
};

function BackendStripes(){
    const backendSkills = [
        {skillName: 'Python', skillDesc: '9.6/10'},
        {skillName: 'Java', skillDesc: '7.2/10'},
        {skillName: 'MySql', skillDesc: '8.1/10'},
        {skillName: 'OOP', skillDesc: '9.2/10'},
        {skillName: 'JWT', skillDesc: '9.3/10'},
    ];

    return (
        <div className="stripes backend">
            { backendSkills.map( (skill,index) => {
                skill.rotateVal = -7.5 * (index + 7);
                 return <WheelStripe key={index} skill={skill}/>
              })
            }
        </div>
    );    
}