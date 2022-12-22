import React from 'react';

// Get data from from API and displayed below Table component
const Row = (props, index) => {
    return (
        <div key={props.key}>
        <tr>
            <td className='name-group'
            ></td>
                <td className="team-position">
                {props.position}
            </td>
            <td className="team-name">
                <div className="crest">
                    <img src={props.crestURI} width='45px' alt=""/>
                </div>
                <span>{props.teamName}</span>
            </td>
            <td>
                {props.playedGames}
            </td>
            <td>
                {props.wins}
            </td>
            <td>
                {props.draws}
            </td>
            <td>
                {props.losses}
            </td>
            <td className="team-points">
                {props.points}
            </td>
        </tr>
        </div>
    );
};

export default Row;