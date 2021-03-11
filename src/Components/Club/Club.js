import { Button } from 'react-bootstrap';
import React from 'react';
import './Club.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';


const Club = (props) => {
    const { idTeam, strTeam, strGender, strStadium, strTeamBadge } = props.club
    const history = useHistory();
    return (
        <div className="clubCard">
            <div className="details">
                <img src={strTeamBadge} alt="" />
                <h4>{strTeam}</h4>
                <h6>Team Type: {strGender}</h6>
                <p>Home Venue: {strStadium}</p>
                <Button onClick={ () => history.push(`/club/${idTeam}`)} variant="info" className="explore-button"> Explore <FontAwesomeIcon icon={faArrowCircleRight} /> </Button>
            </div>
        
        </div>
    );
};

export default Club;