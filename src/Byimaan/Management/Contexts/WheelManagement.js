/* -- Byimaan -- */

import React, {useContext, createContext, useState, useEffect, useRef} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useRefManager } from "./ReferenceProvider";

const WheelContext = createContext();

export default function WheelManagement({children}){

    // default rotation value of the wheel is zero.
    const [wheelVal,setWheelVal] = useState(-22.5);

    const wheelLocalRefs = {
        page: useRefManager().page3,
        wheel: useRef(null),
        panel: useRef(null),
    };

    const skillInfo = (rotateVal=null) => {
        const skillDescription = {
            ui: " My proficiency in UI design is notable, where I focus on creating intuitive and visually appealing user interfaces. This skill is vital in crafting user experiences that are not only functional but also aesthetically pleasing and user-friendly.",
            css: "With my expertise in CSS, I excel in styling web applications. My ability to use CSS effectively allows me to create responsive and visually engaging designs, ensuring that the applications are not only functional but also have a strong visual presence.",
            html: "My solid foundation in HTML is essential for structuring web content. I leverage HTML to build well-organized and accessible web pages, laying the groundwork for robust and SEO-friendly web applications.",
            gsap: "GSAP enables me to add sophisticated animations to web applications. Using GSAP, I enhance user interfaces with smooth, engaging, and high-performance animations, significantly improving the user experience.",
            axios: " I am highly adept at using Axios for making HTTP requests in web applications. My expertise with Axios is crucial for seamless data fetching, posting, and handling API requests, ensuring efficient and reliable data management in web apps.",
            js: "JavaScript is my all-time favorite programming language. My expertise in JavaScript underpins my ability to create dynamic, interactive, and responsive web applications, utilizing its vast ecosystem to bring innovative ideas to life.",
            redux: " It enables me to manage complex application states efficiently. I excel in integrating Redux in large-scale React projects, ensuring seamless and predictable state management.",
            react: " I specialize in React, using its component-based architecture to build dynamic, responsive UIs. My skills encompass a thorough understanding of hooks, context, and lifecycle methods, allowing me to craft interactive and optimized web applications.",
            quality: "Quality is paramount in my software development approach. I focus on writing efficient, maintainable code and adhere to best practices like code reviews and unit testing to ensure robust and scalable software solutions.",
            django: "Django is my preferred backend framework, with a strong grasp of its ORM, class-based views, and MVT architecture. My proficiency lies in building secure, maintainable web applications and RESTful APIs, particularly using Django Rest Framework.",
            drf: "I am adept in Django Rest Framework, using it to create performant, well-structured APIs. My skills in DRF are essential for integrating complex data structures and establishing a seamless frontend-backend connection.",
            math: "My passion for mathematics, especially calculus, underpins my problem-solving skills in software development. This mathematical acumen is vital in algorithm design and optimization, enhancing my ability to tackle computational challenges.",
            python: "My proficiency in Python is advanced, making it a cornerstone of my backend skill set. I leverage Python's simplicity and versatility for efficient and scalable web development, as well as in data manipulation tasks.",
            java: "While Java is not my primary language for software development, my knowledge in it contributes significantly to my overall programming acumen. It helps me to understand the key programming concepts more deeply.",
            mysql: "In the realm of database management, my expertise with MySQL is integral. I skillfully use MySQL for designing, optimizing, and maintaining robust databases, ensuring efficient data handling and integrity in web applications.", 
            oop: "My deep understanding of Object-Oriented Programming principles is evident in my approach to software design. I apply these principles to create modular, reusable, and scalable code, essential for developing complex software systems.",
            jwt: "I prefer to implement secure authentication and authorization mechanisms using JSON Web Tokens (JWT) in web applications. My expertise in JWT ensures the safe and efficient transmission of information, bolstering the security of web services."
        };
    
        const skillDetails = {
            '37.5': ['User Interface',skillDescription.ui],
            '30': ['CSS',skillDescription.css],
            '22.5': ['HTML',skillDescription.html],
            '15': ['GSAP',skillDescription.gsap],
            '7.5': ['Axios',skillDescription.axios],
            '0': ['JavaScript',skillDescription.js],
            '-7.5': ['Redux',skillDescription.redux],
            '-15': ['React',skillDescription.react],
            '-22.5': ['Quality',skillDescription.quality],
            '-30': ['Django',skillDescription.django],
            '-37.5': ['Django Rest Framework',skillDescription.drf],
            '-45': ['Mathematics',skillDescription.math],
            '-52.5': ['Python',skillDescription.python],
            '-60': ['Java',skillDescription.java],
            '-67.5': ['MySql',skillDescription.mysql],
            '-75': ['Object Oriented Programming',skillDescription.oop],
            '-82.5': ['JSON Web Tokens',skillDescription.jwt]
        };

        return rotateVal ? skillDetails[`${rotateVal}`] : skillDetails[`${wheelVal}`];
    };

    const useWheel = {

        localRefs: wheelLocalRefs,

        isAtCenter: () => wheelVal === -22.5,

        getWheelVal: () => wheelVal,

        getSkillInfo: skillInfo,

        rotateWheel: (val) => {
            // val should not be less than -82.5 and not more than 37.5
            if ( val >= -82.5 && val <= 37.5 ){
                setWheelVal(val);
            };
        },
    };


    useEffect(() => {

        const handleEvent = () => {

            var rotateVal = useWheel.isAtCenter() ? 0 : -22.5

            gsap.to(wheelLocalRefs.wheel.current,{
                rotate: rotateVal,
                duration: .8,
                ease: 'power1.inOut'
            });
        };

        gsap.to(wheelLocalRefs.wheel.current,{
            scrollTrigger: {
                trigger: wheelLocalRefs.page.current,
                scroller: 'body',
                toggleActions: 'restart pause resume pause',
                start: 'top 65%',
                onLeaveBack: handleEvent
            },
            rotate: wheelVal,
            duration: .8,
            ease: 'power2.inOut',
        });

    },[wheelVal])

    return (
        <WheelContext.Provider value={useWheel}>
            {children}
        </WheelContext.Provider>
    );
};

export function useWheelManager(){
    return useContext(WheelContext);
};