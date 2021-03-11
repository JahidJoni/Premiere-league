import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';
import Banner from '../../Images/banner1.jpg';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons'


function Home() {
    const [club, setClub] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setClub(data.teams));
    }, []);

    return (
        <div>
            <div className="top-banner">
                <img src={Banner} alt="" className="banner"/>            
                <h4 className="greetings">This is EPL & WE BELIEVE IN FOOTBALL</h4>
            </div>
            <div>
                <h5 className="massage"> Click the explore button & see the details! <FontAwesomeIcon icon={faForward} /></h5>
                <div className="clubs">
                {club.map(club => <Club key={club.idTeam} club={club}> </Club>)}
                </div>
            </div>
        </div>
    );
}

export default Home;