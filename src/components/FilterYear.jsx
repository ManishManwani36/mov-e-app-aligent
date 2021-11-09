import React, { useState } from 'react'
import { Slider } from '@material-ui/core'

function FilterYear(props) {
    const [val, setVal] = useState([1970, 2021]);
    const updateRange = (e, data) => {
        setVal(data);
    };
    return (
        <>
            <div className="year-filter">
                <h1 className="filter-header">YEAR</h1>
                <div className="range-slider">
                    <p>{val[0]}</p>
                    <Slider
                        min={1970}
                        max={2021}
                        value={val}
                        onChange={updateRange}
                        onClick={() => props.setFilterYear(val)}
                    />
                    <p>{val[1]}</p>
                </div>

            </div>
        </>
    )
}

export default FilterYear
