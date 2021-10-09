import React from 'react';
import styled from 'styled-components';
import { colors, css_indent } from "helpers/";


const directions = {
    'start': '0 6 0 0',
    'end': '0 0 0 6',
}
const variants = {
    normal: colors.black,
    filled: "#ffffff",
    bright: colors.black,
};

export const ButtonIco = ({ direction, variant, icon }) => {
    return (
        <Wrapper margin={directions[direction]}>
            {React.cloneElement(icon, { color: variants[variant]})}
        </Wrapper>
    );
};

const Wrapper = styled.span`
    display: flex;
    flex-direction: row;
    ${({ margin }) => margin && "margin:" + css_indent(margin)};
`;