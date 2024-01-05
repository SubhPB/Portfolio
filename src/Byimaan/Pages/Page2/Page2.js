/* -- Byimaan -- */

import React from "react";
import Description from "./Description";
import './page-2.css';

export default function Page2(){

    const description = "I do full stack development to create dynamic and responsive web applications using a powerful combination of Django, Django REST Framework, React, and advanced JavaScript, underpinned by a deep understanding of HTML and CSS. My expertise in Python is next-level, complemented by a strong foundation in OOP and a practical knowledge of Java, which I primarily leverage for algorithmic problem-solving. My academic background in computer science and mathematics, particularly in calculus, enhances my ability to tackle complex computational problems, and I'm adept at using MySQL for database management and GSAP for rich, interactive animations. I am highly motivated and constantly seeking self-improvement, always eager to learn and adopt new technologies and methodologies in the rapidly evolving field of software development.";

    return (
        <div className="page two">
            <Page2Heading heading={" Introduction "}/>
            <Description desc={description}/>
        </div>
    );
};

function Page2Heading({heading}){

    return (
        <div class="p2-heading">
            <p>{heading}</p>
        </div>
    )
};