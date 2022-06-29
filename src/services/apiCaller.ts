import axios from 'axios';
import Urls from '../helpers/urls';

class ApiHandler {

    private defaultCharactersEndpoint: string = Urls.characters;
    private defaultLocationsEndpoint: string = Urls.locations;
    private defaultEpisodesEndpoint : string = Urls.episodes;
    private defaultPageNumber: number = Urls.defaultPage;

    constructor() {}

    getCharacters = async (page: number = this.defaultPageNumber) => {
        try {
            const response = await axios.get(`${this.defaultCharactersEndpoint}${page}`);
            return response.data
        } catch (error) {
            console.log(error);
        }
        
    }

    getLocations = async () => {
        try {
            const response = await axios.get(`${this.defaultLocationsEndpoint}`);
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    getEpisodes = async () => {
        try {
            const response = await axios.get(`${this.defaultEpisodesEndpoint}`);
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
        
}

export const rickAndMortyAPIcaller = new ApiHandler();