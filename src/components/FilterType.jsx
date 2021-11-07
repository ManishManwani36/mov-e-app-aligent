import React from 'react';

function FilterType(props) {
   
    return (
        <>
            <div className="type-filter">
                <h1 className="filter-header">TYPE</h1>
                <div>
                <input
                 
                    type="radio" 
                    checked={props.filterType === "Any"}
                    value=""
                    onChange={(event)=>{props.setFilterType(event.target.value)}}/>
                <label>Any</label>
                <input
                 
                    type="radio" 
                    checked={props.filterType === "movie"}
                    value="movie"
                    onChange={(event)=>{props.setFilterType(event.target.value)}}/>
                <label>Movies</label>
                <input
                 
                    type="radio" 
                    checked={props.filterType === "series"}
                    value="series"
                    onChange={(event)=>{props.setFilterType(event.target.value)}}/>
                <label>Series</label>
                <input
                 
                    type="radio" 
                    checked={props.filterType === "episode"}
                    value="episode"
                    onChange={(event)=>{props.setFilterType(event.target.value)}}/>
                <label>Episodes</label>
                </div>
            </div>
        </>
    )
}

export default FilterType
