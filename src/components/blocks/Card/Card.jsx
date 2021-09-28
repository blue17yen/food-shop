import React from 'react';
import styled from 'styled-components';
import { setFont } from "../Text/";
import { Button } from './../Button/Button';

import defaultImage from '../../../assets/images/def-card-img.png'

const Wrapper = styled.div`
    width: 100%;
    max-width: 270px;
    min-height: 324px;
    background-color: #fff;
    border: 1px solid #D1D1D1;
    border-radius: 12px;
    padding: 16px 16px;
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
`

const Image = styled.img`
    width: 237px;
    height: 180px;
    margin: 0 0 16px;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    margin: 0 0 16px;
`;

const Title = styled.h5`
    ${setFont('h5')};
`;

const SubTitle = styled.p`
    ${setFont("caption")};
    color: #575757;
`;

const CostBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Price = styled.h4`
    ${setFont("h4")};
`;


export const Card = ({
    imagePath = defaultImage,
    title = "Product title",
    subTitle = "Space for a small product description",
    price = "36.99 USD",
    buttonText = "Buy Now",
}) => {
    return (
        <Wrapper>
            <Inner>
                <Image src={imagePath} />
                <Info>
                    <Title>{title}</Title>
                    <SubTitle>{subTitle}</SubTitle>
                </Info>
                <CostBlock>
                    <Price>{price}</Price>
                    <Button variant='filled' size='sm' padding="6.5 12">
                        {buttonText}
                    </Button>
                </CostBlock>
            </Inner>
        </Wrapper>
    );
};