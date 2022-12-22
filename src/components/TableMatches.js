import React from 'react'

// Component with table for tournament standings
const TableMatches = (props) => {
    return (
        <div className="schedule-container">
                {props.children}
        </div>
    )
}

export default TableMatches;