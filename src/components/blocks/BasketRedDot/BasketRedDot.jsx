import React from 'react';
import styled from 'styled-components';

import { colors, setFontStyle } from "helpers/";


export const BasketRedDot = ({ children, count }) => {
    return (
        <Wrapper>
            {children}
            {count !== 0 && <Dot>{count < 10 ? count : ">9"}</Dot>}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
`
const Dot = styled.span`
    position: absolute;
    bottom: -5px;
    left: -5px;
    min-width: 18px;
    min-height: 18px;
    background: ${colors.red};
    border-radius: 50%;
    
    /* padding: 8px 4px; */
    display: flex;
    justify-content: center;
    align-items: center;
    ${setFontStyle("h1")};
    font-size: 10px;
    line-height: 1px;
    color: #fff;
`;
