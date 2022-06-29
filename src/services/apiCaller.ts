import axios from 'axios';


class ApiHandler {

    private defaultCharactersEndpoint: string = 'https://rickandmortyapi.com/api/character/?page='
    private defaultPage: number = 1;

    constructor() {}

    getCharacters = async (page: number = this.defaultPage) => {
        try {
            const response = await axios.get(`${this.defaultCharactersEndpoint}${page}`);
            return response.data
        } catch (error) {
            console.log(error);
        }
        
    }

    getLocations = async () => {

    }

    getEpisodes = async () => {

    }
        
}

export const rickAndMortyAPIcaller = new ApiHandler();