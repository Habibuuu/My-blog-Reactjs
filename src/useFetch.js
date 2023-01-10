import { useState, useEffect } from "react";
 
const useFetch = (url) => {
    const [data, SetData] = useState(null);
    const [isPending, SetIsPending] = useState(true);
    const [error, SetError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
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
                if(err.name === 'AbortError') {
                    console.log('Fetch Aborted');
                }else {
                    SetIsPending(false);
                    SetError(err.message);
                }
            })
        }, 1000); 

        return () =>  abortCont.signal;
    }, [url]);

    return { data, isPending, error }
}

export default useFetch; 