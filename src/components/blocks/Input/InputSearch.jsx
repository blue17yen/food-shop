import React from 'react';
import { PropTypes } from "prop-types";
import styled from 'styled-components';

import { css_indent } from 'helpers/';

import { Icon } from "components/blocks/Icon/Icon";

import * as Style from './inputStyle'
import searchSvg from 'assets/svg/ic-actions-search.svg'


export const InputSearch = ({ margin = "0 0 0 0", value = '', onChange, refImp }) => {
    return (
        <Wrapper margin={margin}>
            <InputRoot
                value={value}
                onChange={onChange}
                type='search'
                placeholder='Search Products, categories ...'
                ref={refImp}
            />
            <SearchIcon />
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

const Search = styled.div`
    position: absolute;
    top: 13px;
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

const SearchIcon = () => {
    return (
        <Search>
            <Icon icon={searchSvg} iconName={"searchSvg"} />
        </Search>
    );
};