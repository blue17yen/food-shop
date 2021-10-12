import React, { useState, useEffect, useCallback } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// helpers
import { colors, device, setFontStyle, decoder } from "helpers/";
// components
import { Container } from "components/Container/Container";
import { Numberselector } from 'components/blocks/Selector/NumberSelector';
import { Button } from "components/blocks/Button/Button";
import { Disableprise } from "components/blocks/NoProducts/DisablePrise";
import { Like } from "components/blocks/Like/Like";
import { Loader } from "components/blocks/Loader/Loader";
import { Plus } from "components/Icons/PlusIcon";
import { CheckIcon } from "components/Icons/CheckIcon";
// api
import { getProduct } from "api/spoonacularAPI";
import { LimitRequestsError } from 'api/LimitReqestsERROR';
// store
import { addProduct, updateProduct } from "redux/basketSlice";
import { addViewed } from "redux/viewedSlice";


export const Product = () => {
    const dispatch = useDispatch();
    const productID = useParams().id;
    const locationState = useLocation()?.state;

    const [productInBasket, wasAddToBasket] = useSelector((state) => {
        const p = state.basket.basketProducts[productID];
        return [p, Boolean(p)];
    });
    const [pageError, setPageError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [numSelected, setNumSelected] = useState(1);

    /*
        If there is such a product in the basket
        then use its data from the store
        or set data from locationState
        or fetch data
    */
    useEffect(() => {
        if (wasAddToBasket) {
            setProduct(productInBasket);
            setNumSelected(productInBasket.count);
            setIsLoading(false);
        } else {
            if (locationState) {
                setProduct(locationState);
                setIsLoading(false);
            } else {
                getData(productID);
            }
        }
    }, [productInBasket, wasAddToBasket, locationState, productID]);

    /* 
        Update product count in basket
        when a new product quantity is selected
        and if there is such a product in the basket
        or set in state
    */
    const handleNumSelector = useCallback(
        (num) => {
            if (wasAddToBasket) {
                dispatch(
                    updateProduct({
                        id: productInBasket.id,
                        newCount: num,
                    })
                );
            } else {
                setNumSelected(num);
            }
        },
        [wasAddToBasket, productInBasket, dispatch]
    );

    async function getData(productID) {
        setIsLoading(true);
        const fetchData = await getProduct(productID);
        if (fetchData instanceof LimitRequestsError) {
            setPageError(fetchData.toString().split(": ")[1]);
        } else if (!Object.keys(fetchData).length) {
            setPageError("No product category was found for your request.");
        } else {
            setProduct(fetchData);
        }
        setIsLoading(false);
    }
    const handleAddToBasket = () => {
        if (!wasAddToBasket) {
            dispatch(addProduct({ product, newCount: numSelected }));
        }
    };



    /*
        When product loaded on page
        set to viewed section on store
    */
    useEffect(() => {
        if (product) {
            dispatch(addViewed({ product }));
        }
    }, [product, dispatch]);

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
                {!pageError ? (
                    <Inner>
                        <Image src={product.images[2]} />
                        <ProductInfo>
                            <Title>{decoder(product.title)}</Title>
                            <Like product={product} />
                            <ContentProduct
                                id={product.id}
                                breadcrumbs={product.breadcrumbs}
                                brand={product.brand}
                            />
                            <Sale>
                                <Price>
                                    <Disableprise price={product.price} />
                                    {wasAddToBasket && (
                                        <TotalPrice>
                                            Total: {productInBasket.totalPrice}{" "}
                                            USD
                                        </TotalPrice>
                                    )}
                                </Price>
                                <Numberselector
                                    callback={handleNumSelector}
                                    selected={numSelected}
                                    textButton={"Pcs"}
                                />
                                {!wasAddToBasket ? (
                                    <Button
                                        variant='filled'
                                        size='md'
                                        startIcon={<Plus />}
                                        disabled={!Boolean(product.price)}
                                        onClick={handleAddToBasket}
                                    >
                                        Add to basket
                                    </Button>
                                ) : (
                                    <Button
                                        variant='bright'
                                        size='md'
                                        startIcon={<CheckIcon size={18} />}
                                        disabled={!Boolean(product.price)}
                                    >
                                        In basket
                                    </Button>
                                )}
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
                                                ? decoder(product.generatedText)
                                                : decoder(product.description)}
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
                    </Inner>
                ) : (
                    <ErrorInner>
                        <ErrorInfo>No such item</ErrorInfo>
                        {pageError?.length && (
                            <ErrorInfoSm>{pageError}</ErrorInfoSm>
                        )}
                    </ErrorInner>
                )}
            </Container>
        </Wrapper>
    );
};


const ContentProduct = ({ id, breadcrumbs, brand }) => {
    return (
        <Table>
            <TableBlock>
                <TableItem>
                    ProductID:
                    <TableItemValue>{id}</TableItemValue>
                </TableItem>
                <TableItem>
                    Category:
                    <TableItemValue>
                        <Breadcrumbs>
                            {breadcrumbs.map((bc) => (
                                <NavLink to={"/products/" + bc} key={bc}>
                                    <Breadcrumb>{bc}</Breadcrumb>
                                </NavLink>
                            ))}
                        </Breadcrumbs>
                    </TableItemValue>
                </TableItem>
                <TableItem>
                    Stock:
                    <TableItemValue>In Stock</TableItemValue>
                </TableItem>
                <TableItem>
                    Brand:
                    <TableItemValue>{brand}</TableItemValue>
                </TableItem>
            </TableBlock>
            <TableBlock>
                <TableItem>
                    Freshness:
                    <TableItemValue>1 days old</TableItemValue>
                </TableItem>
                <TableItem>
                    Buy by:
                    <TableItemValue>pcs, kgs, box, pack</TableItemValue>
                </TableItem>
                <TableItem>
                    Delivery:
                    <TableItemValue>in 2 days</TableItemValue>
                </TableItem>
                <TableItem>
                    Delivery area:
                    <TableItemValue>Earth</TableItemValue>
                </TableItem>
            </TableBlock>
        </Table>
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
const ErrorInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
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
const Price = styled.div`
    display: flex;
    flex-direction: column;
    ${setFontStyle("h3")};
    color: ${colors.green};
`;
const TotalPrice = styled.h5`
    ${setFontStyle("h5")};
    color: ${colors.green};
`
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