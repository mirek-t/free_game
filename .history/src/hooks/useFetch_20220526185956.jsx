import axios from 'axios';
import React, { useState } from 'react'

import { API_HOST } from '../components/constants/constants';

function useFetch() {

    const [games, setGames] = useState([]);

    const getData = () => {
        axios.get("/games", {
            baseURL: `https://${API_HOST}/api`
        })
    }

  return ;
}

export default useFetch