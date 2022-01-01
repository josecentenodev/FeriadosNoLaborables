import react from 'react';
import axios from 'axios';

const actualYear = new Date().getFullYear();
const API_URL = "https://nolaborables.com.ar/api/v2/feriados/2022" 

export default async function getFeriados () {
    try {
        const response = await axios({
            url: `${API_URL}`,
            method: 'GET'
        })
        return response
    } catch (e) {
        console.log(e)
    }
}