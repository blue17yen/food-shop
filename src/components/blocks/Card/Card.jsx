import React from 'react';
import { useHistory, NavLink } from "react-router-dom";
import styled from 'styled-components';

import { colors } from './../../../helpers/colors';
import { setFont } from "../Text/setFont";

import { Button } from './../Button/Button';

import defaultImage from '../../../assets/images/def-card-img.png'


export const Card = ({product}) => {
    const {
        id,
        image = defaultImage,
        title = "Product title",
        brand = null,
        breadcrumbs = [],
        price = null,
        buttonText = "Buy Now",
    } = product;

    const history = useHistory();

    const handleOpenProduct = () => {
        console.log(product);
        window.scrollTo(0, 0);
        history.push(`/product/${id}`, {...product});
    }


    return (
        <Wrapper>
            <Inner>
                <Image src={image}  onClick={handleOpenProduct}/>
                <Info>
                    <Brand>{brand}</Brand>
                    <Title onClick={handleOpenProduct}>{title}</Title>
                    <BreadCrumbs>
                        {breadcrumbs.slice(0, 3).map((bc) => (
                            <NavLink to={bc} key={bc}>
                                <BreadCrumb>{bc}</BreadCrumb>
                            </NavLink>
                        ))}
                    </BreadCrumbs>
                </Info>
                <CostBlock>
                    <Price>
                        {!price ? `not available` : `${price.toFixed(2)} USD`}{" "}
                    </Price>
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


const Wrapper = styled.div`
    width: 100%;
    max-width: 270px;
    min-height: 324px;
    background-color: #fff;
    border: 1px solid #d1d1d1;
    border-radius: 12px;
    padding: 16px 16px;
`;

const Inner = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

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
    ${setFont("h5")};
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
`;
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