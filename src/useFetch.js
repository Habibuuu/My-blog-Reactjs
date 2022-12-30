import { useState, useEffect } from "react";
 
const useFetch = (url) => {
    const [data, SetData] = useState(null);
    const [isPending, SetIsPending] = useState(true);
    const [error, SetError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => { 
                if(!res.ok) {
                    throw Error('could no fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                SetData(data);
                SetIsPending(false);
                SetError(null); 
            })
            .catch(err => {
                SetIsPending(false);
                SetError(err.message);
            })
        }, 1000); 
    }, []);

    return { data, isPending, error }
}

export default useFetch;