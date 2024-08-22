import React from 'react';

function Card({ data }) {
    return (
        <div className="card col-md-4">
            <div className="card-body">
                <h5 className="card-title">{data.teamHeading}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{data.matchNumberVenue}</h6>
                <p className="card-text">{data.battingTeam}</p>
                <p className="card-text">{data.battingTeamScore}</p>
                <p className="card-text">{data.bowlTeam}</p>
                <p className="card-text">{data.bowlTeamScore}</p>
                <p className="card-text">{data.liveText}</p>
                <a href={'https://www.cricbuzz.com'+data.matchLink} className="card-link" target="_blank" rel="noopener noreferrer">
                    {data.matchLink}
                </a>
            </div>
        </div>
    );
}

export default Card;
