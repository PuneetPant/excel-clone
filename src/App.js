import React, { useRef } from 'react';
import Header from '../src/components/Header/header';
import FunctionBar from '../src/components/FunctionBar/functionBar';

import './App.scss';
const App = () => {
    // const nodeRef = useRef(" ");
    return (
        <div className="app-wrapper">
            <Header />
            <FunctionBar />
        </div>
    )
}


export default App;