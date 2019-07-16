import React, {useState} from 'react'
import EventForm from './EventForm'
import Event from './Event'
import {useAxios} from '../hooks/useAxios'
import styled from 'styled-components'
function Events(props) {
    const [events, setEvents] = useState([]);
    const [countryCodes] = useAxios("https://api.coingecko.com/api/v3/events/countries")
    const [eventTypes] = useAxios("https://api.coingecko.com/api/v3/events/types")

    const addEvents = (events, type) => {
        if(type==='All'){
            setEvents(events.data)
        }
        else
            setEvents(events.data.filter(event => event.type===type))
    }

    return (
        <>
            <h2 style={{margin:"15px"}}>Find events near you!</h2>
            <EventForm add={addEvents} countries={countryCodes} types={eventTypes}/>
            <EventContainer>
                {events.map(event => <Event key ={event.title} event={event} />)}
            </EventContainer>
        </>
    )
}

export default Events

const EventContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 1100px;
    margin: 75px auto;
`