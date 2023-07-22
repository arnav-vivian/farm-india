import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {

            console.log("hii")
            setLoading(true);
            try {
                const res = await axios.get(url);
                setData(res.data);
            }
            catch (err) {
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    const refetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
        } catch (err) {
            setError(err);
        }

        setLoading(false);
    };
    return { data, error, loading, refetch };
};

export default useFetch;