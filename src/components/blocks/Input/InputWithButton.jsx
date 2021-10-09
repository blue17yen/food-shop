import React from 'react';
import styled from "styled-components";

import { css_indent, device } from "helpers/";

import { Button } from "components/blocks/Button/Button";

import * as Style from "./inputStyle";



const Wrapper = styled.div`
    position: relative;
    min-width: 100%;
    margin: ${(props) => css_indent(props.margin)};

    & button {
        position: absolute;
        top: -2px;
        right: 0; 
        background: transparent;
        border-color: transparent;
    }
`;

const InputRoot = styled.input`
    ${Style.inputRoot};
    min-width: 100%;

    padding-right: 100px;

    @media ${device.mobileL} {
        padding-right: 120px;
    }
`;

export const InputWithButton = ({ buttonText = 'Button', buttonOnClick, value, margin = '0 0 0 0' }) => {
    return (
        <Wrapper margin={margin}>
            <InputRoot type='text'  />
            <Button variant={'bright'} size='sm' >{buttonText}</Button>
        </Wrapper>
    );
};