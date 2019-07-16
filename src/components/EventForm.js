import React, {useState} from 'react'
import {useAxios} from '../hooks/useAxios'
import styled from 'styled-components'

export default function EventForm(props) {
    const [inputValue, setInputValue] = useState({country: 'US', type: 'All'});
    const [specificEvents] = useAxios(`https://api.coingecko.com/api/v3/events?country_code=${inputValue.country}`);
    
    let countryData = []
    let eventData = []

    if(props.countries.data)
        countryData = props.countries.data.sort((a,b) => a.country>b.country?1: -1)
    if(props.types.data)
        eventData = props.types.data.sort((a,b) => a>b?1:-1)
    
    return (
        <Form onSubmit={(e)=> {
            e.preventDefault();
            props.add(specificEvents, inputValue.type)
        }}>
            <div>
                <select value={inputValue.country} onChange={(e) => setInputValue({...inputValue, country: e.target.value})}>
                    {countryData.map(country => {
                        if(country.country)
                            return <option key={country.code} value={country.code}>{country.country}</option>
                    })}
                </select>
                <select value={inputValue.type} onChange={(e) => setInputValue({...inputValue, type: e.target.value})}>
                    <option key='all' value='All'>All</option>
                    {eventData.map(event => {
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
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80px;
    width: 400px;
    margin: 15px auto;

    div{
        display: flex;
        justify-content: space-evenly;

        select{
            width: 150px;
            height: 30px;
            border-radius: 5px;
            border: 1px solid #bdbdbd;
            background: #f2f2f2;
            border-radius: 5px;
            padding: 5px;
            background-position: 8px 9px;
            &:focus{
                outline: none;
                background-color: #ffffff;
                border: 1px solid #b1e1e4;
            }
        }
    }

    input{
        width: 150px;
        height: 30px;
        border-radius: 5px;
        margin: 0 auto;
        cursor: pointer;
        color: #444444;
        background: #b9e4e3;
        text-shadow: 0px 1px 1px #ffffff;
        border-bottom: 2px solid #b2b2b2;
            &:hover {
                color: #333333;
                border: 1px solid #a4a4a4;
                border-top: 2px solid #b2b2b2;
                background: #a0dbc4;
            }
            &:focus{
                outline: none;
            }
    }
`