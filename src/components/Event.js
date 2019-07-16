import React from 'react'
import styled from 'styled-components'
export default function Event(props) {
    return (
        <EventCard>
            <h3>{props.event.title}</h3>
            <a href={`${props.event.website}`}>Click here for more information</a>
            <h5>{props.event.start_date} - {props.event.end_date}</h5>
            <h5>{props.event.address}</h5>
            <img src={props.event.screenshot}/>
            <h4>{props.event.description}</h4>
        </EventCard>
    )
}

const EventCard = styled.div`
    width: 450px;
    margin: 0 auto;
    h3{
        font-size: 3rem;
        padding: 5px;
    }
    h4{
        font-size: 2rem;
        padding: 5px;
    }
    h5{
        font-size: 1.5rem;
        padding: 5px;
    }
    img{
        border-radius: 20px;
    }
    a{
        font-size: 1.8rem;
        color: black;
    }
`