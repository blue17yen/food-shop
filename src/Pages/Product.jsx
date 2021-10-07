import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../helpers/colors";
import { setFont } from "./../components/blocks/Text/setFont";
import { decoder } from './../helpers/decoderHTML';

import { Container } from "../components/Container/Container";
import { Button } from "./../components/blocks/Button/Button";
import { getProduct } from "../api/spoonacularAPI";
import { useLocationPathName } from './../helpers/hooks/useLocationPathName';
import { LimitRequestsError } from './../api/LimitReqestsERROR';
import { Loader } from "../components/blocks/Loader/Loader";
import { DATA_APPLE } from "../api/testData";

export const Product = () => {
    const [pageError, setPageError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState(null)
    const location = useLocation();
    const productId = useLocationPathName();

    useEffect(() => {
        const locationState = location.state;
        if (productId?.length) {
            if (locationState) {
                setProduct(locationState);
                setIsLoading(false);
            } else {
                getData(productId);
            }
        }
    }, [productId]);

    async function getData(productId) {
        setIsLoading(true);
        const fetchData = await getProduct(productId);
        if (fetchData instanceof LimitRequestsError) {
            setPageError(fetchData.toString().split(": ")[1]);
        } else if (!Object.keys(fetchData).length) {
            setPageError("No product category was found for your request.");
        } else {
            setProduct(fetchData);
        }
        setIsLoading(false);
    }
    
    if (isLoading) {
        return (
            <Wrapper>
                <LoadingInner>
                    <Loader />
                </LoadingInner>
            </Wrapper>
        );
    }
    
    return (
        <Wrapper>
            <Container>
                <Inner>
                    {!pageError ? (
                        <>
                            <Image src={product.images[2]} />
                            <ProductInfo>
                                <Title>{product.title}</Title>
                                <Table>
                                    <TableBlock>
                                        <TableItem>
                                            ProductID:
                                            <TableItemValue>
                                                {product.id}
                                            </TableItemValue>
                                        </TableItem>
                                        <TableItem>
                                            Category:
                                            <TableItemValue>
                                                <Breadcrumbs>
                                                    {product.breadcrumbs.map(
                                                        (bc) => (
                                                            <NavLink
                                                                to={
                                                                    "/products/" +
                                                                    bc
                                                                }
                                                                key={bc}
                                                            >
                                                                <Breadcrumb>
                                                                    {bc}
                                                                </Breadcrumb>
                                                            </NavLink>
                                                        )
                                                    )}
                                                </Breadcrumbs>
                                            </TableItemValue>
                                        </TableItem>
                                        <TableItem>
                                            Stock:
                                            <TableItemValue>
                                                In Stock
                                            </TableItemValue>
                                        </TableItem>
                                        <TableItem>
                                            Brand:
                                            <TableItemValue>
                                                {product.brand}
                                            </TableItemValue>
                                        </TableItem>
                                    </TableBlock>
                                    <TableBlock>
                                        <TableItem>
                                            Freshness:
                                            <TableItemValue>
                                                1 days old
                                            </TableItemValue>
                                        </TableItem>
                                        <TableItem>
                                            Buy by:
                                            <TableItemValue>
                                                pcs, kgs, box, pack
                                            </TableItemValue>
                                        </TableItem>
                                        <TableItem>
                                            Delivery:
                                            <TableItemValue>
                                                in 2 days
                                            </TableItemValue>
                                        </TableItem>
                                        <TableItem>
                                            Delivery area:
                                            <TableItemValue>
                                                Earth
                                            </TableItemValue>
                                        </TableItem>
                                    </TableBlock>
                                </Table>
                                <Sale>
                                    <Price>{product.price} USD</Price>
                                    <Counter>1</Counter>
                                    <Button
                                        variant='filled'
                                        size='md'
                                        startArrow
                                    >
                                        Add to cart
                                    </Button>
                                </Sale>

                                <Info>
                                    <Description>
                                        <DescriptionTitle>
                                            Description
                                        </DescriptionTitle>
                                        <DescriptionText>
                                            {product.generatedText
                                                ? decoder(product.generatedText)
                                                : decoder(product.description)}
                                        </DescriptionText>
                                    </Description>
                                    {product.ingredientCount && (
                                        <Ingredients>
                                            <IngredientsTitle>
                                                Ingredients (
                                                {product.ingredientCount})
                                            </IngredientsTitle>
                                            <IngredientsText>
                                                {product.ingredientList}
                                            </IngredientsText>
                                        </Ingredients>
                                    )}
                                </Info>
                            </ProductInfo>
                        </>
                    ) : (
                        <>
                            <ErrorInfo>No such item</ErrorInfo>
                            {pageError?.length && (
                                <ErrorInfoSm>{pageError}</ErrorInfoSm>
                            )}
                        </>
                    )}
                </Inner>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.main`
    padding: 30px 0 40px;
`;
const LoadingInner = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Inner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const Image = styled.img`
    width: 100%;
    max-width: 569px;
    height: 320px;
    object-fit: contain;
`;
const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`;
const Title = styled.h1`
    ${setFont("h2")};
`;
const Breadcrumbs = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
`;
const Breadcrumb = styled.p`
    ${setFont("caption", true)};
    color: ${colors.green};
`;
const Table = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const TableBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const TableItem = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;

    ${setFont("body")};
`;
const TableItemValue = styled.span``;
const Sale = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;
const Price = styled.h2`
    ${setFont("h3")};
    color: ${colors.green};
`;
const Counter = styled.div``;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const DescriptionTitle = styled.h4`
    ${setFont("h4")};
`;
const DescriptionText = styled.code`
    ${setFont("body")}
`;
const Ingredients = styled(Description)``;
const IngredientsTitle = styled(DescriptionTitle)``;
const IngredientsText = styled(DescriptionText)``;

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