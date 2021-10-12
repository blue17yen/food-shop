import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { Container } from 'components/Container/Container';
import { Search } from "components/Search/Search";
import { BasketRedDot } from 'components/blocks/BasketRedDot/BasketRedDot';

import { UserIcon } from 'components/Icons/UserIcon';
import { BasketIcon } from 'components/Icons/BasketIcon';


export const Header = () => {
    const count = useSelector((state) => state.basket.totalProductsCount);

    return (
        <HeaderWrap>
            <Container>
                <HeaderInner>
                    <Logo>
                        <NavLink to='/home'>Food shop 🍲</NavLink>
                    </Logo>
                    <Search />
                    <UserNav>
                        <NavLink to='/user'>
                            <UserIcon />
                        </NavLink>
                        <NavLink to='/basket'>
                            <BasketRedDot count={count}>
                                <BasketIcon />
                            </BasketRedDot>
                        </NavLink>
                    </UserNav>
                </HeaderInner>
            </Container>
        </HeaderWrap>
    );
}

const HeaderWrap = styled.header``;

const HeaderInner = styled.div`
    min-height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: relative;
`;

const Logo = styled.div`
    font-family: "Poppins-Bold";
    font-size: 16px;
    line-height: 24px;
    text-align: center;
`;

const UserNav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 14px;
`;