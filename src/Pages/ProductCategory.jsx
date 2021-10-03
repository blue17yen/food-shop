import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { device } from './../helpers/device';
import { Container } from '../components/Container/Container';
import { Card } from '../components/blocks/Card/Card';
import { setFont } from '../components/blocks/Text/setFont';
import { colors } from '../helpers/colors';
import { searchProductCategory } from "../api/spoonacularAPI";

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
        max-width: 556px;
        margin: 0 auto;
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

export const ProductCategory = () => {
    const [products, setProducts] = useState([]);
    const {  pathname } = useLocation();
    const categoryName = pathname.split("/")[2];

    async function searchProd(name, count) {

        let data = await searchProductCategory(name, count);
        setProducts(data.products ?? []);
    }

    useEffect(() => {
        searchProd(categoryName, 10);
    }, [categoryName]);

    return (
        <Wrapper>
            <Container>
                <Inner>
                    <TitlePage>{categoryName}</TitlePage>
                    <CardWrapper>
                        {products.map((prod) => (
                            <Card
                                key={prod.id}
                                imagePath={prod.images[2]}
                                title={prod.title}
                                brand={prod.brand}
                                breadcrumbs={prod.breadcrumbs}
                                price={prod.price}
                            />
                        ))}
                    </CardWrapper>
                </Inner>
            </Container>
        </Wrapper>
    );
}
