import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import styled from 'styled-components';

// Help func
import { device, setFontStyle, colors } from "helpers/";

// Compornents
import { Container } from 'components/Container/Container';
import { Card } from 'components/blocks/Card/Card';
import { Pagination } from "components/blocks/Pagination/Pagination";
import { Loader } from "components/blocks/Loader/Loader";

// Api
import { searchProductCategory } from "api/spoonacularAPI";
import { LimitRequestsError } from 'api/LimitReqestsERROR';


export const ProductCategory = () => {
    const categoryName = useParams().category;

    const [pageError, setPageError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [productsOnPage, ] = useState(10);
    const [totalProductsCount, setTotalProductsCount] = useState(
        10
    );
    const [numberCurrentPage, setNumberCurrentPage] = useState(0);
    const [products, setProducts] = useState([]);

    const handlePagination = useCallback((pageNum) => {
        setNumberCurrentPage(pageNum);
    }, [])

    async function searchProd(name, count, page) {
        setIsLoading(true);
        const data = await searchProductCategory(name, count, page);
        // test data
        // const data = DATA_APPLE;
        if (data instanceof LimitRequestsError) {
            setPageError(data.toString().split(': ')[1]);
        } else if (!data.products?.length) {
            setPageError("No product category was found for your request.");
        } else {
            setTotalProductsCount(data.totalProducts > 910 ?  910 : data.totalProducts);
            setProducts(data.products ?? []);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        setNumberCurrentPage(0);
        setProducts([])
    }, [categoryName]);

    useEffect(() => {
        if (categoryName) {
            searchProd(categoryName, productsOnPage, numberCurrentPage);
            
        }

    }, [categoryName, productsOnPage, numberCurrentPage]);

    

    if (isLoading) {
        return (
            <Wrapper>
                <LoadingInner>
                    <Loader /> 
                </LoadingInner>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <Container>
                {products.length ? (
                    <Inner>
                    <TitlePage>{categoryName} products category</TitlePage>
                        <CardWrapper>
                            {products.map((prod) => (
                                <Card
                                    key={prod.id}
                                    product={prod}
                                />
                            ))}
                        </CardWrapper>
                        <Pagination
                            totalCount={totalProductsCount}
                            countOnPage={productsOnPage}
                            currentPage={numberCurrentPage}
                            callback={handlePagination}
                        />
                    </Inner>
                ) : (
                    <Inner>
                        <ErrorInfo>No such item</ErrorInfo>
                        {pageError?.length && (
                            <ErrorInfoSm>{pageError}</ErrorInfoSm>
                        )}
                    </Inner>
                )}
            </Container>
        </Wrapper>
    );
}

// Style
const Wrapper = styled.main`
    flex: 1;
    display: flex;
    margin: 0 auto;
    padding: 30px 0 40px;
`;
const Inner = styled.div`
    display: flex;
    flex-direction: column;
`;
const LoadingInner = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const TitlePage = styled.h1`
    ${setFontStyle("h1")};
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
    ${setFontStyle("h1")};
    color: ${colors.light_grey};
    text-align: center;
    margin: 0;
    text-transform: lowercase;
    &::first-letter {
        text-transform: uppercase;
    }
`;
const ErrorInfoSm = styled.h3`
    ${setFontStyle("h3")};
    color: ${colors.light_grey};
    text-align: center;
    margin: 0;
    text-transform: lowercase;
    &::first-letter {
        text-transform: uppercase;
    }
`;