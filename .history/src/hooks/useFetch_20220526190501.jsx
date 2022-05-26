import axios from 'axios';
import React, { useState } from 'react'

import { API_HOST, API_KEY } from '../components/constants/constants';

function useFetch() {

    const [games, setGames] = useState([]);

    const getData = () => {
        axios.get("/games", {
            baseURL: `https://${API_HOST}/api`,
            headers: {
                "X-RapidAPI-Host": API_HOST,
                "X-RapidAPI-Key": API_KEY
            }
        }).then(response => {
            if(response.data.status !== 0) {
                setGames(response.data)
            } else {
                setGames([]);
            }
        }).catch(error => {
            setGames([]);

        })
    }

  return ;
}

export default useFetch