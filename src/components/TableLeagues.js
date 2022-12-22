import React from 'react'

// Component with table for tournament standings
const TableLeague = (props) => {
    return (
        <>
        <h2 className='header-standings'>Груповий етап.
        <br/>З кожної групи в наступну стадію вийшли по дві команди.
        <br/>
        Пропонуємо пригадати як для команд завершився груповий етап:
        </h2>
        <table className="standings">
                <div className='wrap-standings'>
                        <span className='name-group'>
                            <h4>Групи A, B, C, D</h4>
                            </span>
                <tr className="table-head">
                <td>
                    </td>
                    <td className="team-position">
                    №
                    </td>
                    <td className="team-name">
                        Збірна
                    </td>
                    <td title="Matches played">
                        М
                    </td>
                    <td title="Wins">
                        В
                    </td>
                    <td title="Draws">
                        Н
                    </td>
                    <td title="Losses">
                        П
                    </td>
                    <td title="Team points">
                        О
                    </td>
                </tr>
                {props.children[0]}
                {props.children[1]}
                {props.children[2]}
                {props.children[3]}
                <br />
                <br />
                {props.children[4]}
                {props.children[5]}
                {props.children[6]}
                {props.children[7]}
                <br />
                <br />
                {props.children[8]}
                {props.children[9]}
                {props.children[10]}
                {props.children[11]}
                <br />
                <br />
                {props.children[12]}
                {props.children[13]}
                {props.children[14]}
                {props.children[15]}
                <br />
                <br />
                <span className='name-group'>
                    <h4>Групи E, F, G, H</h4>
                </span>
                <tr className="table-head">
                <td>
                    
                    </td>
                    <td className="team-position">
                    №
                    </td>
                    <td className="team-name">
                        Збірна
                    </td>
                    <td title="Matches played">
                        М
                    </td>
                    <td title="Wins">
                        В
                    </td>
                    <td title="Draws">
                        Н
                    </td>
                    <td title="Losses">
                        П
                    </td>
                    <td title="Team points">
                        О
                    </td>
                </tr>
                {props.children[16]}
                {props.children[17]}
                {props.children[18]}
                {props.children[19]}
                <br />
                <br />
                {props.children[20]}
                {props.children[21]}
                {props.children[22]}
                {props.children[23]}
                <br />
                <br />
                {props.children[24]}
                {props.children[25]}
                {props.children[26]}
                {props.children[27]}
                <br />
                <br />
                {props.children[28]}
                {props.children[29]}
                {props.children[30]}
                {props.children[31]}
                <br />
                <br />
                </div>
        </table>
        </>
    )
}

export default TableLeague