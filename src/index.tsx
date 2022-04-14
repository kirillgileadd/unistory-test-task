import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter} from "react-router-dom";
import {GlobalStyles} from "@mui/material";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const inputGlobalStyles = <GlobalStyles styles={{
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },
}}/>

root.render(
    <BrowserRouter>
        <Provider store={store}>
            {inputGlobalStyles}
            <App/>
        </Provider>
    </BrowserRouter>
);
