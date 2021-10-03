import React from 'react';
import styled from 'styled-components';
import { setFont } from "../Text/setFont";
import { Button } from './../Button/Button';

import defaultImage from '../../../assets/images/def-card-img.png'
import { colors } from './../../../helpers/colors';

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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Image = styled.img`
    width: 237px;
    height: 180px;
    margin: 0 0 16px;
    object-fit: contain;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    margin: 0 0 16px;
`;

const Title = styled.h5`
    ${setFont('h5')};
`;

const Brand = styled.p`
    ${setFont("caption")};
    color: #575757;
`;

const BreadCrumbs = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
`
const BreadCrumb = styled.p`
    ${setFont("caption", true)};
    color: ${colors.green};
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
    brand = null,
    breadcrumbs = [],
    price = null,
    buttonText = "Buy Now",
}) => {
    return (
        <Wrapper>
            <Inner>
                <Image src={imagePath} />
                <Info>
                    <Brand>{brand}</Brand>
                    <Title>{title}</Title>
                    <BreadCrumbs>{breadcrumbs.slice(0, 3).map(bc => <BreadCrumb key={bc}>{bc}</BreadCrumb>)}</BreadCrumbs>
                </Info>
                <CostBlock>
                    <Price>{!price ? `not available` : `${price.toFixed(2)} USD`} </Price>
                    <Button
                        variant='filled'
                        size='sm'
                        padding='6.5 12'
                        disabled={!Boolean(price)}
                    >
                        {buttonText}
                    </Button>
                </CostBlock>
            </Inner>
        </Wrapper>
    );
};