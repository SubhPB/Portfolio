/* -- Byimaan -- */

import React from "react";
import P4Header from "./P4Header";
import Description from "../Page2/Description";
import './page-4.css';

export default function Page4(){

    const description = "In the journey of transforming ideas into tangible innovations, collaboration stands as a pivotal pillar. If you're seeking a passionate and skilled partner to bring your vision to life, you're in the right place. My expertise in software development, combined with a profound commitment to quality and efficiency, positions me ideally to contribute to projects that aim to make a significant impact. Whether it's crafting cutting-edge applications, developing robust back-end systems, or creating engaging user experiences, I'm here to help turn your concepts into reality. Let's join forces to build something extraordinary - where your vision meets my expertise, and together, we pave the way for the next big thing in the tech world. Reach out, and let's start a conversation about how we can achieve greatness together.";

    return (
        <div className="page four">
            <P4Header/>
            <Description desc={description} reverse={true}/>
        </div>
    )
}