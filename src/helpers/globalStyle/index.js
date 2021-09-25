import React from 'react';
import { Normalize } from "styled-normalize";
import GlobalFont from "./globalFont";
import Styles from './globalStyle'

const GlobalStyle = () => {
    return (
        <>
            <Normalize/>
            <GlobalFont/>
            <Styles />
        </>
    );
}

export default GlobalStyle;
