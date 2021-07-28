import React, { useEffect, useState } from 'react';
import "./excelSection.scss";
const ExcelSection = (props) => {
    const [selectedRowAndColumn, setRowAndColumn] = useState([]);
    const column = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const mapper = {
        '1': 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F', 7: 'G', 8: 'H', 9: 'I', 10: 'J', 11: 'K', 12: 'L', 13: 'M', 14: 'N', 15: 'O', 16: 'P', 17: 'Q', 18: 'R', 19: 'S', 20: 'T', 21: 'U', 22: 'V', 23: 'W', 24: 'X', 25: 'Y', 26: 'Z'
    }
    const arr = new Array(100);
    const arr1 = new Array(26);

    const populateColumns = column.map((val, index) => {
        return (
            <div key={index} className="column-cell">{val}</div>
        )
    })


    const populateRows = [...arr].map((val, idx) => {
        return (
            <div key={idx + 1} className="row-cell">
                {idx + 1}
            </div>
        )
    })

    const getSelectedCell = (e) => {
        if (e.ctrlKey || e.metaKey) {
            setRowAndColumn([...selectedRowAndColumn, e.target.getAttribute('row').toString() + "," + e.target.getAttribute('col')]);
        } else {
            setRowAndColumn([e.target.getAttribute('row').toString() + "," + e.target.getAttribute('col')]);
        }

    }

    const handleInputCellSelected = (e) => {
        getSelectedCell(e);
    }


    const populateCells = [...arr].map((val, idx) => {
        return (
            <div key={idx} className={`row row-${idx + 1}`}>
                {
                    [...arr1].map((valInner, indexInner) => {
                        return (
                            <div key={indexInner + 1}

                                className={`cell-box cell-box-${indexInner + 1} ${selectedRowAndColumn.includes(idx + 1 + "," + mapper[indexInner + 1]) ? "selected" : ""}`}
                                row={idx + 1}
                                col={mapper[indexInner + 1]}
                                contentEditable={selectedRowAndColumn.includes(idx + 1 + "," + mapper[indexInner + 1]) ? true : false}
                                onClick={handleInputCellSelected}
                            >

                            </div>
                        )
                    })
                }
            </div>
        )
    })
    useEffect(() => {
        props.getRowAndColumnCallBack(selectedRowAndColumn);
    })

    return (
        <div className="excel-section">
            <div className="column-wrapper">
                <div className="blank">

                </div>
                <div className="columns">
                    {populateColumns}
                </div>
            </div>

            <div className="row-input-container">
                <div className="row-wrapper">
                    {populateRows}
                </div>

                <div className="input-cell-wrapper">
                    {populateCells}
                </div>

            </div>
        </div>
    )
}

export default React.memo(ExcelSection);