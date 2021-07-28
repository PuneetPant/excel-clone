import React, { useState, useEffect, useRef } from 'react';
import './selectionBar.scss';

const SelectionBar = (props) => {
    console.log(props);
    return (
        <div className="selection-bar">
            <div className="dropdown-section "
            // onClick={() => { setZoomSection(!zoomSection) }}
            >
                <input type="text" min="50" max="100"
                    value={`${props.column}:${props.row}`}
                ></input>
                <i className="material-icons icon-formating">arrow_drop_down</i>
                {/* <div className={`dropdown-content ${zoomSection === true ? "" : "hidden"}`}>
                    {zoomDropdown}
                </div> */}
            </div>
            <div className="selected-field">
                <input type="text" />
            </div>
        </div>
    )
}

export default React.memo(SelectionBar);