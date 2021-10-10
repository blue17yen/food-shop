import React from 'react';
import styled from 'styled-components';
// helpers
import { colors, device } from "helpers/";
// components
import { Container } from "components/Container/Container";
import { NavMenuItem } from "./Inner/NavMenuItem";




export const NavMenu = ({ content }) => {
    return (
        <Wrapper>
            <Container>
                <Inner>
                    {content.map((el) => (
                        <NavMenuItem key={el.path} {...el} />
                    ))}
                </Inner>
            </Container>
        </Wrapper>
    );
}


const Wrapper = styled.nav`
    background-color: ${colors.smoky_white};
`;
const Inner = styled.div`
    min-height: 40px;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    justify-content: flex-start;
    column-gap: 30px;
    row-gap: 16px;
    padding: 8px 16px 8px 0;

    @media ${device.mobileL} {
        min-height: 55px;
        padding: 16px 16px 16px 0;
    }
`;
