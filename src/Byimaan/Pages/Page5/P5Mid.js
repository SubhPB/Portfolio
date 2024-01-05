/* -- Byimaan -- */

import React, {useRef, useEffect} from "react";
import Description from "../Page2/Description";
import { AcademicLink, SocialLink } from "./P5Links";

export default function P5Middle(){

    const leftDesc = "This is my academic qualification. However, I am a firm believer in the power and importance of self-learning. My educational journey has provided a strong foundation, but it is my dedication to continuous self-improvement and exploration beyond the classroom that truly drives my growth.";
    const rightDesc = "I maintain a low profile on social media, focusing my energy primarily on my professional and personal growth. Therefore, the best ways to connect with me are through the following links. I appreciate direct and meaningful interactions, and these platforms offer the ideal space for such engagements.";

    return (
        <>
        <AcademicLink/>
        <P5Description desc={leftDesc} reverse={true}/>

        <SocialLink type={"ri-linkedin-box-fill"} text={"LinkedIn"} address={"https://www.linkedin.com/in/subh-byimaan-1260b82a8/"}/>
        <SocialLink type={"ri-mail-send-line"} text={"Email"} email={"byimaan1@gmail.com"}/>
        <SocialLink type={"ri-github-line"} text={"Github"} address={"https://github.com/SubhPB"}/>
        <P5Description desc={rightDesc} reverse={null}/>
        </>
    );

};

export function P5Description({desc,reverse=null}){

    const p5MidRef = useRef(null);

    useEffect( () => {

        if(reverse){ p5MidRef.current?.classList?.add('rev'); }

        return () => { 
            if (reverse){ p5MidRef.current?.classList?.remove('rev'); } 
        };

    },[]);

    return (
        <div ref={p5MidRef} className="p5-mid">
            <Description desc={desc} reverse={reverse}/>
        </div>
    );
};

