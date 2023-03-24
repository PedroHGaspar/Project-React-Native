import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            "X-RapidAPI-Key": "992bf20958msh4d98cc6b34914edp1fd6efjsnda1db23fe804",//Please don't use this api key, it's free! Go to rapidAPI and search for JSearch. Then, take your own key.
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error.response.data)
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };

    // useEffect(() => {
    //     let timer = null;
    //     const delay = 2000; // 2 seconds (api limit is 1 per 2 seconds, because it's free)

    //     const fetchWithDelay = () => {
    //         fetchData();
    //         timer = setTimeout(fetchWithDelay, delay);
    //     };

    //     fetchWithDelay();

    //     return () => clearTimeout(timer);
    // }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;