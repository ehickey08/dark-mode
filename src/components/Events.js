import React, {useState} from 'react'
import EventForm from './EventForm'
import Event from './Event'
import {useAxios} from '../hooks/useAxios'

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
            <h2>Find events near you!</h2>
            {countryCodes.data && eventTypes.data && <EventForm add={addEvents} countries={countryCodes} types={eventTypes}/>}
            {events.length>0 && events.map(event => <Event key ={event.title} event={event} />)}
        </>
    )
}

export default Events
