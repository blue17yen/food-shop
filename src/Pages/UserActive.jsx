import React from 'react';
import styled from "styled-components";
import {useSelector} from 'react-redux';


import { setFontStyle, device } from "helpers/";

import { Container } from 'components/Container/Container';
import { Card } from 'components/blocks/Card/Card';


export const UserActive = () => {
    return (
        <Wrapper>
            <Container>
                <Inner>
                    <Visited />
                    <Likes />
                </Inner>
            </Container>
        </Wrapper>
    );
}
const Wrapper = styled.main`
    flex: 1;
    display: flex;
    margin: 0 auto;
    padding: 30px 0 40px;
`;
const Inner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;
const Title = styled.h2`
    ${setFontStyle('h2')};
`


const Visited = () => {
    const visitedProducts = useSelector(state => state.viewed.slice(0, 3))

    return (
        <>
            <Title>Your last visited products:</Title>
            <VisitedWrapper>
                {visitedProducts.map((prod) => (
                    <Card product={prod} />
                ))}
            </VisitedWrapper>
        </>
    );
}

const VisitedWrapper = styled.div`
    max-width: 320px;
    overflow: auto;
    display: flex;
    flex-direction: row;
    margin: 0 auto 40px;
    gap: 20px;

    @media ${device.mobileL} {
        max-width: 556px;
    }
    @media ${device.tablet} {
        max-width: 708px;
    }
    @media ${device.laptopS} {
        max-width: 932px;
    }
    @media ${device.laptopL} {
        max-width: 1140px;
    }
    @media ${device.desktop} {
        max-width: 1200px;
    } ;
`;


const Likes = () => {
    const { likeds, orderLikeds } = useSelector((state) => state.liked);

    return (
        <>
            <Title>Your liked products:</Title>
            <LikesWrapper>
                {orderLikeds.map((prod) => (
                    <Card product={likeds[prod]} />
                ))}
            </LikesWrapper>
        </>
    );
};

const LikesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    margin: 0 auto 40px;

    @media ${device.mobileL} {
        max-width: 556px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: unset;
        column-gap: 15px;
        row-gap: 15px;
    }
    @media ${device.tablet} {
        max-width: 620px;
        column-gap: 30px;
        row-gap: 30px;
    }
    @media ${device.laptopS} {
        max-width: 870px;
        justify-content: flex-start;
    }
`;