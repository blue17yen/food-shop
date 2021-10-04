import React from 'react';
import styled from 'styled-components';

import loaderSVG from '../../../assets/svg/loader.svg'

const Wrapper = styled.span`
    display: flex;
    justify-content: center;
    user-select: none;
`

export const Loader = () => {
    return (
        <Wrapper>
            <img src={loaderSVG} alt={"loaderSVG"} draggable={false} />
        </Wrapper>
    );
}