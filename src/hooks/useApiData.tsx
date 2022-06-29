
import { useEffect, useState } from "react";
import { rickAndMortyAPIcaller } from "../services/apiCaller";
import { APIInterface } from "../types/apiResponses";

export const useApiData = () => {
    const [data, setData] = useState<APIInterface>();
    const [loading, setLoading] = useState<boolean>(true);
    const [server, setServer] = useState<boolean>(false);
    
    const loadData = async () => {
        const result = rickAndMortyAPIcaller.getCharacters();
        setData(await result);
    }

    useEffect(() => {
        loadData();
        if (!data) {
            setLoading(false);
            setServer(true)
        }
    }, [])

    return [data, loading, server] as const;
}