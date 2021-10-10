import React from 'react';
import { PropTypes } from "prop-types";
import styled from 'styled-components';

import { css_indent } from 'helpers/';

import { SearchIcon } from 'components/Icons/SearchIcon';
import * as Style from './inputStyle'


export const InputSearch = ({ margin = "0 0 0 0", value = '', onChange, refImp }) => {
    return (
        <Wrapper margin={margin}>
            <InputRoot
                value={value}
                onChange={onChange}
                type='search'
                placeholder='Search products category ...'
                ref={refImp}
            />
            <SearchIconWrapper>
                <SearchIcon size={20} />
            </SearchIconWrapper>
        </Wrapper>
    );
};

InputSearch.propType = {
    value: PropTypes.string,
    margin: PropTypes.string,
    onChange: PropTypes.func,
};

const Wrapper = styled.div`
    position: relative;
    flex: 1;

    margin: ${(props) => css_indent(props.margin)};
`;

const SearchIconWrapper = styled.div`
    height: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
`;

const InputRoot = styled.input`
    ${Style.inputRoot};
    max-width: none;
    padding-right: 44px;
    &::-ms-clear,
    &::-webkit-clear {
        width: 0;
        height: 0;
        display: none;
    }
`;
