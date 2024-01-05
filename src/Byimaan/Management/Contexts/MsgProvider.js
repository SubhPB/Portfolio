/* -- Byimaan -- */

import React, {useContext, createContext, useState} from "react";

const MsgContext = createContext();

export default function MsgProvider({children}){
    
    // sms refers to the two spans who are coming and going behind the navbar's logo.
    const [smsBox,setSms] = useState({
        sms1: 'THE',
        sms2: 'FUTURE'
    });

    const randomSMS = () => {

        const randoms = [['THE','FUTURE'],['NO','COMPETITION'],['HUSSLE&','MOTIVATE'],
            ['NEVER','GIVEUP!'],['DREAM','BIG'],['CHALLENGE','ACCEPTED'],['THE','FUTURE']
        ];
        const randomMsg = randoms[Math.floor(Math.random() * randoms.length)] ?? randoms[0]; 
        setSms({
            sms1: randomMsg[0],
            sms2: randomMsg[1],
        });
    };

    const sendSMS = (sms1=null,sms2=null) => {

        if (sms1 && sms2){
            setSms({
                sms1: sms1.toUpperCase(),
                sms2: sms2.toUpperCase()
            });
        } else { randomSMS(); };

    };

    return (
        <MsgContext.Provider value={{smsBox,sendSMS}}>
            {children}
        </MsgContext.Provider>
    );
};

export function useMsgManager(){
    return useContext(MsgContext);
}