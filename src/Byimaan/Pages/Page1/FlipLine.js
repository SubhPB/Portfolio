/* -- Byimaan -- */ 

import React from "react";

export function FlipLine({props}){


    return (
        <div className={`line ${props.type}`}>

            { props.texts.map( (text,index) => <h1 key={index} className={`line-elem ${props.type}`}> {text} </h1>)}
                          
        </div>
    );
    
};


export default function H1FlipLineWrapperPage1(){

    const threeLines = [
        {
            type: 'h1',
            texts: ['AWESOME','GAME','FLEXIBLE']
        },
        {
            type: 'h1',
            texts: ['FULL STACK','CHANGING','RESPONSIVE']
        },
        {
            type: 'h1',
            texts: ['DEVELOPER','PLAYER','ADAPTABLE']
        }
    ];

    return (
        <div className="opening p1">

            { threeLines.map( (line,index) => <FlipLine key={index} props={line}/> )}

        </div>
    );
};