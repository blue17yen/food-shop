import React, { useState, useEffect, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
// helpers
import { colors, device, setFontStyle, decoder } from "helpers/";
// components
import { Container } from "components/Container/Container";
import { Button } from "components/blocks/Button/Button";
import { Loader } from "components/blocks/Loader/Loader";
import { Numberselector } from 'components/blocks/Selector/NumberSelector';
import { Plus } from "components/Icons/PlusIcon";
import { Disableprise } from "components/blocks/NoProducts/DisablePrise";
// api
import { getProduct } from "api/spoonacularAPI";
import { LimitRequestsError } from 'api/LimitReqestsERROR';
// hooks
import { useLocationPathName } from 'helpers/hooks/useLocationPathName';


export const Product = () => {
    const [pageError, setPageError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState(null)
    const location = useLocation();
    const productId = useLocationPathName();
    const [numSelected, setNumSelected] = useState(1);

    const handleNumSelector = useCallback((num) => {
        setNumSelected(num);
    }, []);


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
                                <Title>{decoder(product.title)}</Title>
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
                                    <Price>
                                        <Disableprise price={product.price} />
                                    </Price>
                                    <Numberselector
                                        callback={handleNumSelector}
                                        selected={numSelected}
                                        textButton={"Pcs"}
                                    />
                                    <Button
                                        variant='filled'
                                        size='md'
                                        startIcon={<Plus />}
                                        disabled={!Boolean(product.price)}
                                    >
                                        Add to cart
                                    </Button>
                                </Sale>

                                <Info>
                                    {(product.generatedText ||
                                        product.description) && (
                                        <Description>
                                            <DescriptionTitle>
                                                Description
                                            </DescriptionTitle>
                                            <DescriptionText>
                                                {product.generatedText
                                                    ? decoder(
                                                          product.generatedText
                                                      )
                                                    : decoder(
                                                          product.description
                                                      )}
                                            </DescriptionText>
                                        </Description>
                                    )}
                                    {product.ingredientCount.length && (
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
    gap: 30px;

    @media ${device.tablet} {
        flex-direction: row;
    } ;
`;
const Image = styled.img`
    width: 100%;
    max-width: 569px;
    height: 320px;
    margin: 0 auto;
    object-fit: contain;
`;
const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media ${device.mobileL} {
        width: 100%;
        max-width: 480px;
        margin: 0 auto;
    };
    @media ${device.tablet} {
        width: 100%;
        max-width: unset;
        margin: 0;
    };
`;
const Title = styled.h1`
    ${setFontStyle("h2")};
`;
const Breadcrumbs = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
`;
const Breadcrumb = styled.p`
    ${setFontStyle("caption", true)};
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

    ${setFontStyle("body")};
`;
const TableItemValue = styled.span``;
const Sale = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px 30px;

`;
const Price = styled.h2`
    ${setFontStyle("h3")};
    color: ${colors.green};
`;
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
    ${setFontStyle("h4")};
`;
const DescriptionText = styled.code`
    ${setFontStyle("body")}
`;
const Ingredients = styled(Description)``;
const IngredientsTitle = styled(DescriptionTitle)``;
const IngredientsText = styled(DescriptionText)``;

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