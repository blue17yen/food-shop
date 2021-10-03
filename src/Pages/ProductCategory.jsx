import React, { useState, useEffect, useCallback } from "react";
import styled from 'styled-components';

// Help func
import { device } from './../helpers/device';
import { colors } from '../helpers/colors';
import { setFont } from '../components/blocks/Text/setFont';

// Compornents
import { Container } from '../components/Container/Container';
import { Card } from '../components/blocks/Card/Card';
import { Pagination } from "../components/blocks/pagination/Pagination";

// Custom hooks
import { useLocationName } from "../helpers/hooks/useLocationName";

// Api
import { searchProductCategory } from "../api/spoonacularAPI";
import { LimitRequestsError } from './../api/LimitReqestsERROR';

export const ProductCategory = () => {
    const [pageError, setPageError] = useState(null)
    const [products, setProducts] = useState([]);
    const [pageSelected, setPageSelected] = useState(1);
    const categoryName = useLocationName();

    const handlePagination = useCallback((pageNum) => {
        setPageSelected(pageNum);
    }, [])

    async function searchProd(name, count, page) {
        const data = await searchProductCategory(name, count, page);
        if (data instanceof LimitRequestsError) {
            setPageError(data.toString());
        } else if (!data.products?.length) {
            setPageError("No product category was found for your request.");
        } else {
            setProducts(data.products ?? []);
        }
    }

    useEffect(() => {
        if (categoryName) {
            window.scrollTo(0, 0);
            searchProd(categoryName, 5, pageSelected);
        }
    }, [categoryName, pageSelected]);

    return (
        <Wrapper>
            <Container>
                <Inner>
                    {products.length ? (
                        <>
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
                            <Pagination
                                totalCount={25}
                                countOnPage={5}
                                selected={pageSelected}
                                callback={handlePagination}
                            />
                        </>
                    ) : (
                        <>
                            <ErrorInfo>No such item</ErrorInfo>
                            {pageError?.length && (<ErrorInfoSm>{pageError}</ErrorInfoSm>)}
                        </>
                    )}
                </Inner>
            </Container>
        </Wrapper>
    );
}

// Style
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
const ErrorInfo = styled.h1`
    ${setFont("h1")};
    color: ${colors.light_grey};
    text-align: center;
    margin: 0;
    text-transform: lowercase;
    &::first-letter {
        text-transform: uppercase;
    }
`;
const ErrorInfoSm = styled.h3`
    ${setFont("h3")};
    color: ${colors.light_grey};
    text-align: center;
    margin: 0;
    text-transform: lowercase;
    &::first-letter {
        text-transform: uppercase;
    }
`;