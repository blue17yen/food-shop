import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container/Container';
import {BasketItem} from '../components/blocks/Card/BasketItem';
import { colors } from '../helpers/colors';
import { setFont } from '../components/blocks/Text/setFont';
import { Button } from './../components/blocks/Button/Button';

const Wrapper = styled.main`
    padding: 40px 0 40px;
`
const Inner = styled.div`
    display: flex;
    flex-direction: column;
`
const PageHead = styled.h1`
    ${setFont("h1")};
    text-align: center;
    color: ${colors.red};
    margin: 0 0 40px 0;
`;
const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 0 0 40px;
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ListWrapper = styled.div`
    width: 100%;
    padding: 20px 10px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    margin: 0 0 20px;
`;
const ListHead = styled.h5`
    ${setFont('h5')};
    color: ${colors.light_grey};
    margin: 0 0 20px;
`;
const ListAllItems = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
`;
const ListItem = styled.li`
    display: grid;
    grid-template-columns: 1.5fr 0.5fr;
    grid-template-rows: 1fr 1fr;
    gap: 8px 0px;
    grid-template-areas:
        "Name Count"
        "Cost Cost";

    ${setFont("caption")};
    color: ${colors.light_grey};
`;
const ItemProduct = styled.div`
    max-width: 100%;
    grid-area: Name;
    justify-self: start;
    align-self: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const ItemCount = styled.div`
    grid-area: Count;
    justify-self: end;
    align-self: center;
`;
const ItemCost = styled.div`
    grid-area: Cost;
    justify-self: end;
    align-self: center;
    ${setFont("body")};
    color: ${colors.light_grey};
    border-top: 1px solid ${colors.light_grey};
`;
const Continue = styled.h4`
    ${setFont("h5", true)};
    color: ${colors.green};
    text-align: end;
`;
const Total = styled.div`
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${setFont("h4")};
`;
const TotalCostPrev = styled.h4`

`;
const TotalCostEnd = styled.h4`

`;

export const Basket = () => {
    return (
        <Wrapper>
            <Container>
                <Inner>
                    <PageHead>Корзина товаров</PageHead>
                    <Cards>
                        <BasketItem />
                        <BasketItem />
                        <BasketItem />
                        <BasketItem />
                    </Cards>
                    <Bottom>
                        <ListWrapper>
                            <ListHead>Short review</ListHead>
                            <ListAllItems>
                                <ListItem>
                                    <ItemProduct>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit.
                                    </ItemProduct>
                                    <ItemCount>X12 </ItemCount>
                                    <ItemCost>123.3 USD</ItemCost>
                                </ListItem>
                                <ListItem>
                                    <ItemProduct>
                                        Lorem ipsum dolor sit.
                                    </ItemProduct>
                                    <ItemCount>X12 </ItemCount>
                                    <ItemCost>123.3 USD</ItemCost>
                                </ListItem>
                                <ListItem>
                                    <ItemProduct>
                                        Lorem ipsum dolor sit amet.
                                    </ItemProduct>
                                    <ItemCount>X12 </ItemCount>
                                    <ItemCost>123.3 USD</ItemCost>
                                </ListItem>
                                <ListItem>
                                    <ItemProduct>Name product</ItemProduct>
                                    <ItemCount>X12 </ItemCount>
                                    <ItemCost>123.3 USD</ItemCost>
                                </ListItem>
                            </ListAllItems>
                        </ListWrapper>
                            <Continue>Continue shopping</Continue>
                        <Total>
                            <TotalCostPrev>312321 USD</TotalCostPrev>
                            <TotalCostEnd>312321 USD</TotalCostEnd>
                            <Button variant='filled' size='lg' endArrow>
                                To pay
                            </Button>
                        </Total>
                    </Bottom>
                </Inner>
            </Container>
        </Wrapper>
    );
}