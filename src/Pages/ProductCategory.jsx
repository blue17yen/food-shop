import React from 'react';
import styled from 'styled-components';
import { device } from './../helpers/device';
import Container from '../components/Container/Container';
import { Card } from '../components/blocks/Card/Card';
import { setFont } from '../components/blocks/Text/setFont';
import { colors } from '../helpers/colors';
// import { useLocation } from 'react-router';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.main`
    padding: 30px 0 40px;
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitlePage = styled.h1`
    ${setFont("h1")};
    text-align: center;
    color: ${colors.green};
    margin: 0 0 40px 0;
    text-transform: lowercase;
    &::first-letter {
        text-transform: uppercase;
    }
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;

    @media ${device.mobileL} {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 15px;
        row-gap: 15px;
    }
    @media ${device.tablet} {
        column-gap: 30px;
        row-gap: 30px;
    }
`;

export const ProductCategory = () => {
    const { pathname } = useLocation();
    console.log(pathname.split('/')[2]);

    return (
        <Wrapper>
            <Container>
                <Inner>
                    <TitlePage>{pathname.split("/")[2]}</TitlePage>
                    <CardWrapper>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </CardWrapper>
                </Inner>
            </Container>
        </Wrapper>
    );
}
