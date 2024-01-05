/* -- Byimaan -- */

import { useState } from "react";

export default function useScrollHook(){

    const [isFreezed,setIsFreezed] = useState(false);

    const freeze = () => {
        setIsFreezed(true)
        document.body.classList.add('no-scroll');
    };

    const unFreeze = () => {
        setIsFreezed(false);
        document.body.classList.remove('no-scroll')
    };

    const useScroll = {
        freeze: freeze,
        unFreeze: unFreeze
    }

    return [isFreezed,useScroll]

};