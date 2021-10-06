import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { decode } from "html-entities";
import { colors } from "../helpers/colors";
import { setFont } from "./../components/blocks/Text/setFont";

import { Container } from "../components/Container/Container";
import { Button } from "./../components/blocks/Button/Button";

export const Product = (props) => {
    const {
    id,
    images,
    title,
    price,
    generatedText,
    description,
    ingredientCount,
    ingredientList,
    breadcrumbs,
    brand,
} = useLocation().state;
    console.log(images);
    
    const decoder = (des) => {
        const decoded = decode(des, { level: "xml" });
        const removeElements = decoded.replace(
            /(&\w+;)|(\s?(<\/?\w+>|<\w+\s+\/>))/gm,
            ""
        );
        console.table([{ des, removeElements }]);
        return removeElements;
    };

    return (
        <Wrapper>
            <Container>
                <Inner>
                    <Image src={images[2]} />
                    <ProductInfo>
                        <Title>{title}</Title>
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
                                                <NavLink
                                                    to={"/products/" + bc}
                                                    key={bc}
                                                >
                                                    <Breadcrumb>
                                                        {bc}
                                                    </Breadcrumb>
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
                                    <TableItemValue>
                                        pcs, kgs, box, pack
                                    </TableItemValue>
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
                        <Sale>
                            <Price>{price} USD</Price>
                            <Counter>1</Counter>
                            <Button variant='filled' size='md' startArrow>
                                Add to cart
                            </Button>
                        </Sale>

                        <Info>
                            <Description>
                                <DescriptionTitle>Description</DescriptionTitle>
                                <DescriptionText>
                                    {generatedText
                                        ? decoder(generatedText)
                                        : decoder(description)}
                                </DescriptionText>
                            </Description>
                            <Ingredients>
                                <IngredientsTitle>
                                    Ingredients ({ingredientCount})
                                </IngredientsTitle>
                                <IngredientsText>
                                    {ingredientList}
                                </IngredientsText>
                            </Ingredients>
                        </Info>
                    </ProductInfo>
                </Inner>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.main`
    padding: 30px 0 40px;
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

