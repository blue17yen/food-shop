import React from 'react';
import styled from 'styled-components';
import Icon from './../../blocks/Icon/Icon';

import downArrowSVG from "../../../assets/svg/arrows/down-arrow.svg";

const Wrapper = styled.div`
    min-height: 23px;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
        margin: 0 0 0 5px;
    }
`;

const Item = ({ children }) => {
    return (
        <Wrapper>
            {children}
            <Icon icon={downArrowSVG} iconName={"downArrowSVG"} size={18} />
        </Wrapper>
    );
};

export default Item;
