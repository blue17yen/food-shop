import React from 'react';
import styled from "styled-components";
import { cssMP_Helper } from './../../../helpers/margin';
import { Button } from './../Button/Button';
import * as Style from "./inputStyle";
import { device } from './../../../helpers/device';



const Wrapper = styled.div`
    position: relative;
    min-width: 100%;
    margin: ${(props) => cssMP_Helper(props.margin)};

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