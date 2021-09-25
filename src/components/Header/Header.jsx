import React from 'react';
import styled from "styled-components";

import Container from '../Container/Container';

import UserIco from '../../assets/svg/ic-actions-user.svg';
import BasketIco from '../../assets/svg/ic-ecommerce-basket.svg';
import SearchIco from "../../assets/svg/ic-actions-search.svg";


const HeaderWrap = styled.header`
`

const HeaderInner = styled.div`
    min-height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    font-family: "Poppins-Bold";
    font-size: 16px;
    line-height: 24px;
    text-align: center;
`;

const UserNav = styled.div`
    & img {
        width: 24px;
        height: 24px;
        margin: 8px;
    }
`

const Header = () => {
    return (
        <HeaderWrap>
            <Container>
                <HeaderInner>
                    <Logo>
                        Food
                        shop
                        🍲
                    </Logo>
                    <UserNav>
                        <img src={SearchIco} alt='SearchIco' />
                        <img src={UserIco} alt='UserIco' />
                        <img src={BasketIco} alt='BasketIco' />
                    </UserNav>
                </HeaderInner>
            </Container>
        </HeaderWrap>
    );
}

export default Header;
