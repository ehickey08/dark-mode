import {useState, useEffect} from 'react'
import axios from "axios";

export const useAxios = (url) => {
    const [values, setValues] = useState([]);
    
    useEffect(() => {
        axios
            .get(`${url}`)
            .then(res => setValues(res.data))
            .catch(err => console.log(err));
    }, [url]);

    return [values]
}
