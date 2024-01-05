/* -- Byimaan -- */

import React,{useContext,createContext,useRef} from "react";

const ReferenceContext = createContext();

export default function ReferenceProvider({children}){

    const changeCrsrTxt = (txt) => {
        refManager.crsr.current.textContent = txt;
    }

    const refManager = {
        hero: useRef(null),
        crsr: useRef(null),
        page3: useRef(null),
        setCrsrTxt: changeCrsrTxt
    };

    return (
        <ReferenceContext.Provider value={refManager}>
            {children}
        </ReferenceContext.Provider>
    );

};

export function useRefManager(){
    return useContext(ReferenceContext);
}