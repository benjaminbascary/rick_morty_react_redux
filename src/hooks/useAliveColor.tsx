import { useState, useEffect } from "react";
import { aliveStatusColor } from "../types/aliveStatus";
import { characterStatusHandler } from "../helpers/characterStatus";
import { Character } from "../types/apiResponses";

export const useAliveColor = (character : Character) => {

    const [ aliveColor, setAliveColor ] = useState<aliveStatusColor>();

    useEffect(() => {
        setAliveColor(characterStatusHandler.getStatusColor(character.status));
    }, [character.status])

    return [ aliveColor ] as const;
    
}
