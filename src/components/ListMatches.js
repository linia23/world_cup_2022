import React from 'react';

// Get data from from API and displayed below Table component
const ListMatches = (props) => {
    return (
        <div className='schedule-wrapper'>
                <span className='schedule-name-score'>
                <h4>{props.nameHome} {props.homeScore} - {props.awayScore} {props.nameAway}</h4>
                
           {props.utcDate}</span>
        </div>
    );
};

export default ListMatches;