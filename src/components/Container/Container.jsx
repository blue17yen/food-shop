import React from 'react';

import styled from "styled-components";
import { device } from "../../helpers/device";

const ContainerWrap = styled.div`
    padding: 0 10px;
    @media ${device.tablet} {
        padding: 0 30px;
    };
    @media ${device.laptopL} {
        padding: 0 40px;
    };
`;

const Container = ({children}) => {
    return (
        <ContainerWrap>
            {children}
        </ContainerWrap>
    );
}

export default Container;
