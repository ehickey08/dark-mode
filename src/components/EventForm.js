import React, {useState} from 'react'
import {useAxios} from '../hooks/useAxios'

export default function EventForm(props) {
    const [inputValue, setInputValue] = useState({country: 'US', type: 'All'});
    const [specificEvents] = useAxios(`https://api.coingecko.com/api/v3/events?country_code=${inputValue.country}`);
    props.countries.data.sort((a,b) => a.country>b.country?1: -1)
    props.types.data.sort((a,b) => a>b?1:-1)
    
    return (
        <form onSubmit={(e)=> {
            e.preventDefault();
            props.add(specificEvents, inputValue.type)
        }}>
            <div>
                <select value={inputValue.country} onChange={(e) => setInputValue({...inputValue, country: e.target.value})}>
                    {props.countries.data.map(country => {
                        if(country.country)
                            return <option key={country.code} value={country.code}>{country.country}</option>
                    })}
                </select>
                <select value={inputValue.type} onChange={(e) => setInputValue({...inputValue, type: e.target.value})}>
                    <option key='all' value='All'>All</option>
                    {props.types.data.map(event => {
                        return <option key={event} value={event}>{event}</option>
                    })}
                </select>
            </div>
            <input
                type="submit"
                onSubmit={(e)=> {
                    e.preventDefault() 
                    props.add(specificEvents, inputValue.type)
                }}
            />
        </form>
    )
}
