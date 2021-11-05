import React from 'react'

function FilterYear(props) {
    return (
        <>
            <div className="col col-sm-4">
                <input className="form-control" 
                value={props.value}
                onChange={(event)=> props.setFilterYear(event.target.value)}
                placeholder="enter year"></input>
            </div>
        </>
    )
}

export default FilterYear
