/* -- Byimaan -- */

import React from "react";
import { FlipLine } from "./FlipLine";

export default function Quotes(){

    return (
        <div className="quotes p1">
            <Quote/>
        </div>
    );
}

export function Quote(){

    return (
        <div className="quote">
            <H4FlipLineWrapperPage1/>
        </div>
    );
};


export function H4FlipLineWrapperPage1(){

    const fiveLines = [
        {
            type: 'h5',
            texts: [
                "Hey there, I'm a passionate full-stack developer",
                "I bring comprehensive software skill set",
                "Empty your mind. Be formless, shapeless, like water.",
            ]
        },
        {
            type: 'h5',
            texts: [
                "with a deep love for mathematics, especially calculus.",
                "with a mathematical approach to solve problems.",
                "You put water into a cup, it becomes the cup.",
            ]
        },
        {
            type: 'h5',
            texts: [
                "My mathematical mindset enhances my coding skills which ",
                "I'm able to handle entire spectrum of software development ",
                "You put it in a teapot, it becomes the teapot.",
            ]
        },
        {
            type: 'h5',
            texts: [
                "allows me to approach software development with creativity.",
                "from database to creating interactive front-ends. ",
                "Now, water can flow or it can crash.",
            ]
        },
        {
            type: 'h5',
            texts: [
                "Failure fuels my journey towards self-improvement.",
                "Always, hungry to learn and implement new things. ",
                "Be water, my friend like byimaan. ",
            ]
        },
    ];

    const lastLine = {
        type: 'h4',
        texts: [
            " -  Byimaan Subhpreet ",
            " -  Byimaan Subhpreet  ",
            " -  Bruce Lee",
        ]
    }

    return (
        <div className="quote-side">
            <i class="ri-double-quotes-l"></i>
            { fiveLines.map( (line,index) => <FlipLine key={index} props={line}/>)}
            <i className="ri-double-quotes-r"></i>
            <FlipLine props={lastLine}/>
        </div>
    )
}