import React from 'react';
import styled from 'styled-components';
import { PropTypes } from "prop-types";
import { cssMP_Helper } from './../../../helpers/margin';
import Icon from './../Icon/Icon';
import * as Style from './inputStyle'
import searchSvg from '../../../assets/svg/ic-actions-search.svg'

const Wrapper = styled.div`
    position: relative;
    max-width: 320px; 

    margin: ${(props) => cssMP_Helper(props.margin)};
`;

const InputRoot = styled.input`
    ${Style.inputRoot};
    padding-right: 44px;
    &::-ms-clear, &::-webkit-clear {
        width: 0;
        height: 0;
        display: none;
    }
`;

const Search = styled.div`
    position: absolute;
    top: 13px;
    right: 16px;
`

const SearchIcon = () => {
    return (
        <Search>
            <Icon icon={searchSvg} iconName={"searchSvg"} />
        </Search>
    );
}


export const InputSearch = ({ margin = "0 0 0 0", value }) => {
    return (
        <Wrapper margin={margin}>
            <InputRoot type='search' placeholder='Search Products, categories ...' />
            <SearchIcon />
        </Wrapper>
    );
};

InputSearch.propType = {
    value: PropTypes.string,
    margin: PropTypes.string,
};
