import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { API_HOST, API_KEY } from '../components/constants/constants';

const localCache = {}

function useFetch() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        getData();
    }, [])

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

  return {games};
}

export default useFetch