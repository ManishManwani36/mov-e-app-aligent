import React from 'react';

function FilterType(props) {
   
    return (
        <>
            <div className="col col-sm-4">
                <h1>Type:</h1>
                <input
                    className="m-1" 
                    type="radio" 
                    checked={props.filterType === "Any"}
                    value=""
                    onChange={(event)=>{props.setFilterType(event.target.value)}}/>
                <label className="m-1">Any |</label>
                <input
                    className="m-1" 
                    type="radio" 
                    checked={props.filterType === "movie"}
                    value="movie"
                    onChange={(event)=>{props.setFilterType(event.target.value)}}/>
                <label className="m-1">Movies |</label>
                <input
                    className="m-1" 
                    type="radio" 
                    checked={props.filterType === "series"}
                    value="series"
                    onChange={(event)=>{props.setFilterType(event.target.value)}}/>
                <label className="m-1">Series |</label>
                <input
                    className="m-1" 
                    type="radio" 
                    checked={props.filterType === "episode"}
                    value="episode"
                    onChange={(event)=>{props.setFilterType(event.target.value)}}/>
                <label className="m-1">Episodes</label>

            </div>
        </>
    )
}

export default FilterType
