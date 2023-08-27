import axios from 'axios';
import { PrizeDetailInterface } from '../contexts';

interface playResponseInterface {
    status: number,
    errors: Array<string>,
    prize: number|null,      
    prizeDetail: PrizeDetailInterface|null,
}

interface phaseResponseInterface {
    status: number,
    phase: string,
}


const ApiService = {
    async play(data : {[key:string]: string}): Promise<playResponseInterface> {

        const formData = new FormData();

        for (const key in data) {
            formData.append(key, data[key]);
        }

        const response = await axios.post<playResponseInterface>('http://localhost:3080/play', formData);
        return response.data;
    },

    async getPhase(): Promise<phaseResponseInterface> {
        const response = await axios.get('http://localhost:3080/phase');
        return response.data;
    },
};

export default ApiService;