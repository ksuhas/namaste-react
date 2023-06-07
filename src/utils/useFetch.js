import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;
        (async () => {
            try {
                setLoading('loading...');
                setData(null);
                setError(null);
                const response = await fetch(url);
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                const json = await response.json();
                setData(json);
            }
            catch (e) {
                setLoading(false);
                setError('Error :' + e);
            }
        })();
    }, [url]);

    return { data, loading, error }
}

export default useFetch;
