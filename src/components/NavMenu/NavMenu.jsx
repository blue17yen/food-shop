import React from 'react';
import styled from 'styled-components';
import { colors } from '../../helpers/colors';
import { device } from '../../helpers/device';
import Container from './../Container/Container';

const NavMenuWrap = styled.nav`
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
const Item = styled.div`
    min-height: 23px;
    padding: 0 20px 0 0;
    position: relative;
    &::after,
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        height: 3px;
        width: 8px;
        background-color: ${colors.green};
        border-radius: 50px;
        transform: rotate(45deg) translate(-50%, -48%);
    }
    &::before {
        transform: rotate(-45deg) translate(53%, -50%);
    }

    @media ${device.mobileL} {
        padding: 0 20px 0 0;
        &::after,
        &::before {
            height: 3px;
            width: 10px;
            transform: rotate(45deg) translate(-36%, 0);
        }
        &::before {
            transform: rotate(-45deg) translate(38%, -2%);
        }
    }
`;
const ItemText = styled.h5`
    font-family: "Poppins-Medium";
    flex-wrap: 500;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.black};
    word-wrap: normal;

    @media ${device.mobileL} {
        font-size: 15px;
        line-height: 22.5px;
    }
`;

const NavMenu = () => {
    return (
        <NavMenuWrap>
            <Container>
                <Inner>
                    <Item>
                        <ItemText>Bakery</ItemText>
                    </Item>
                    <Item>
                        <ItemText>Fruit and vegetables</ItemText>
                    </Item>
                    <Item>
                        <ItemText>Meat and fish</ItemText>
                    </Item>
                    <Item>
                        <ItemText>Drinks</ItemText>
                    </Item>
                </Inner>
            </Container>
        </NavMenuWrap>
    );
}

export default NavMenu;
