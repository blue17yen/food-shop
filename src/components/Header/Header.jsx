import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Container } from 'components/Container/Container';
import { Search } from "components/Search/Search";
import { Icon } from 'components/blocks/Icon/Icon';

import UserIco from 'assets/svg/ic-actions-user.svg';
import BasketIco from 'assets/svg/ic-ecommerce-basket.svg';


export const Header = () => {
    return (
        <HeaderWrap>
            <Container>
                <HeaderInner>
                    <Logo>
                        <NavLink to='/home'>Food shop 🍲</NavLink>
                    </Logo>
                    <Search />
                    <UserNav>
                        <NavLink to='/basket'>
                            <Icon
                                icon={UserIco}
                                iconName='UserIco'
                                size={24}
                                margin={"0 8 0"}
                            />
                        </NavLink>
                        <NavLink to='/basket'>
                            <Icon
                                icon={BasketIco}
                                iconName='BasketIco'
                                size={24}
                                margin={"0 8 0 8"}
                            />
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
`;