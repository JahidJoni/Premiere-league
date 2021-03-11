import React, { useEffect, useState } from 'react';
import './ClubDetails.css'
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, faInternetExplorer} from '@fortawesome/free-brands-svg-icons'



const ClubDetails = () => {
    const { idTeam } = useParams();

    const [club, setClub] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setClub(data.teams[0]))
    }, [idTeam])
    const { strTeam, intFormedYear, strSport, strGender, strTeamFanart3, strDescriptionEN, strWebsite, strFacebook, strTwitter, strYoutube} = club;
    return (
        <div>
            <div className="badgeArea">
                <div className="badge">
                    <img src={club.strTeamBadge} alt="" className="logo" />
                </div>
            </div>

            <Container>
                <Row className="detailsArea mt-5">
                    <Col xs={12} md={6}><div className="information mt-3">
                        <h2>{strTeam}</h2> <br/>
                        <p>Founded: {intFormedYear}</p>
                        <p>Country: {club.strCountry}</p>
                        <p>Sport Type: {strSport}</p>
                        <p>Gender: {strGender}</p> 
                    </div>
                    </Col>
                    <Col xs={12} md={6}> <div>
                        <img src={strTeamFanart3} alt="" className="team-photo"/>
                    </div>
                    </Col>
                </Row>
                    <div className="description mt-5">
                    <p>{strDescriptionEN}</p>
                    </div>

                <div className="socialLink">
                    <a href={`https://${strWebsite}`} target="blank" className="icons"><FontAwesomeIcon icon={faInternetExplorer} size="lg" /></a>
                    <a href={`https://${strFacebook}`} target="blank" className="icons"><FontAwesomeIcon icon={faFacebook} size="lg"/></a>
                    <a href={`https://${strTwitter}`} target="blank" className="icons"><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
                    <a href={`https://${strYoutube}`} target="blank" className="icons"><FontAwesomeIcon icon={faYoutube} size="lg"/></a>
                </div>
            </Container>

        </div>
    );
};

export default ClubDetails;