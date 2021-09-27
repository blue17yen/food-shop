import React from 'react';
import styled from 'styled-components';
import { device } from './../helpers/device';
import Container from '../components/Container/Container';
import { Card } from '../components/blocks/Card/Card';
import { setFont } from './../components/blocks/Text/index';
import { colors } from '../helpers/colors';

const Wrapper = styled.main`
    padding: 30px 0 40px;
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const TitlePage = styled.h1`
    ${setFont("h1")};
    color: ${colors.green};
    text-transform: uppercase;
    margin: 0 0 40px 0;

    /* @media ${device.tablet} {
        ${setFont("h1")};
        color: ${colors.green};
    } */
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

const ProductCategory = () => {
    return (
        <Wrapper>
            <Container>
                <Inner>
                    {/* <TitlePage>PROPUCT CATEGORY</TitlePage> */}
                    <TitlePage>Fruits</TitlePage>
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

export default ProductCategory;
