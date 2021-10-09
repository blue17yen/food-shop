import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import { css_indent, colors } from "helpers/";

import * as Style from './inputStyle';


export const Input = ({margin = '0 0 0 0',value, label = null,}) => {
    console.log(label)
    return (
        <Wrapper margin={margin}>
            {String(label).length && <Label>{label}</Label>}
            <InputRoot placeholder='Text field' type='text' value={value} />
        </Wrapper>
    );
}

Input.propType = {
    value: PropTypes.string,
    label: PropTypes.string,
    margin: PropTypes.string,
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 320px;

    margin: ${(props) => css_indent(props.margin)};
`;
const Label = styled.label`
    font-family: "Poppins-SemiBold";
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.black};
`;
const InputRoot = styled.input`
    ${Style.inputRoot}
`;