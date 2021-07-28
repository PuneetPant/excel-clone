import React, { useRef, useState } from 'react';
import Header from '../src/components/Header/header';
import FunctionBar from '../src/components/FunctionBar/functionBar';
import SelectionBar from '../src/components/SelectionBar/selectionBar';
import ExcelSection from '../src/components/ExcelSection/excelSection';

import './App.scss';
const App = () => {
    const [row, setRow] = useState("");
    const [column, setColumn] = useState("");
    const callBackFunc = (getData) => {
        console.log('getData:', getData.length);
        setRow(getData.length === 0 ? "" : getData[0].split(",")[0]);
        setColumn(getData.length === 0 ? "" : getData[0].split(",")[1]);
    }

    const formatValuesCallbackFunc = () => {

    }

    return (
        <div className="app-wrapper">
            <Header />
            <FunctionBar />
            <SelectionBar row={row} column={column} />
            <ExcelSection getRowAndColumnCallBack={callBackFunc} />
        </div>
    )
}


export default React.memo(App);