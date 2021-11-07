import React from 'react'

function FilterYear(props) {
    return (
        <>
            <div className="year-filter">
                <h1 className="filter-header">YEAR {props.filterYear}</h1>
                <div className="row">
                    <p>1970</p>
                    <input 
                    type="range" 
                    className="form-range" 
                    min="1970"
                    max="2021"
                    value={props.filterYear}
                    onChange={(event)=> props.setFilterYear(event.target.value)}
                    id="customRange1"></input>
                    <p>2021</p>
                </div>
                
            </div>
        </>
    )
}

export default FilterYear
