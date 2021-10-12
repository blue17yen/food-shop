import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { device, colors, setFontStyle, months } from "helpers/";

import { Container } from 'components/Container/Container';
import { BasketItem } from 'components/blocks/Card/BasketItem';
import { Button } from 'components/blocks/Button/Button';


const date = new Date();
const day = date.getDate() + 1;
const month = months[date.getMonth()];
const year = date.getFullYear();
const dateStr = `${month} ${day}, ${year}`;    


export const Basket = () => {
    const { basketProducts, order, totalProductsCount, totalPrice, tax, totalPriceWithTax  } = useSelector((state) => state.basket);

    return (
        <Wrapper>
            <Container>
                <Inner>
                    <Head>
                        <TotalProductsCount>
                            Total: {totalProductsCount}
                        </TotalProductsCount>
                        <Title>Order Summary</Title>
                        <SubTitle>
                            Price can change depending on shipping method and
                            taxes of your state.
                        </SubTitle>
                    </Head>
                    {order.length ? (
                        <Cards>
                            {order.map((el) => (
                                <BasketItem
                                    key={basketProducts[el]?.id}
                                    product={basketProducts[el]}
                                />
                            ))}
                        </Cards>
                    ) : (
                        <NoProducts>Your shopping basket is empty</NoProducts>
                    )}

                    <Continue>
                        <NavLink to='/home'>Continue shopping</NavLink>
                    </Continue>
                    <Summary>
                        <SummaryItem>
                            <SummaryName>Subtotal</SummaryName>
                            <SummaryCalue>{totalPrice} USD</SummaryCalue>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryName>Tax</SummaryName>
                            <SummaryCalue>17% {tax} USD</SummaryCalue>
                        </SummaryItem>
                    </Summary>
                    <TotalOrder>
                        <TotalOrderTitle>Total Order</TotalOrderTitle>
                        <DeliveryDate>
                            Guaranteed delivery day: {dateStr}
                        </DeliveryDate>
                        <Total>{totalPriceWithTax} USD</Total>
                        <Button
                            variant='filled'
                            size='md'
                            margin={"20 0 0 0"}
                            endArrow
                        >
                            To pay
                        </Button>
                    </TotalOrder>
                </Inner>
            </Container>
        </Wrapper>
    );
}


const Wrapper = styled.main`
    padding: 30px 0 40px;
    position: relative;
`;
const Inner = styled.div`
    max-width: 468px;
    margin: 0 auto;
    border: 1px solid #d1d1d1;
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;

    @media ${device.laptopS} {
        max-width: 538px;
    };
`;
const Head = styled.div`
    margin: 0 0 40px;
    position: relative;
`;
const TotalProductsCount = styled.h4`
    float: right;
    ${setFontStyle("h4")};
`;
const Title = styled.h3`
    ${setFontStyle("h3")};
    margin: 0 0 4px;
`;
const SubTitle = styled.p`
    ${setFontStyle("caption")};
`;
const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 0 0 40px;
`;
const NoProducts = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    ${setFontStyle("h2")};
    color: ${colors.light_grey};
    margin: 40px 0 80px;
`;
const Continue = styled.h4` 
    ${setFontStyle("h5", true)};
    color: ${colors.red};
    text-align: center;
    margin: 0 auto 40px;
    cursor: pointer;
`;

const Summary = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0 0 32px;
`;
const SummaryItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    ${setFontStyle("h6")};
`;
const SummaryName = styled.div`
    justify-self: flex-start;
`;
const SummaryCalue = styled.div`
    justify-self: flex-end;
`;
const TotalOrder = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0;
    grid-template-areas:
        "title total"
        "delivery total"
        "_ button";

    & button {
        grid-area: button;
    }
`;
const TotalOrderTitle = styled.h6`
    grid-area: title;
    ${setFontStyle("h6")};
`;
const DeliveryDate = styled.p`
    grid-area: delivery;
    ${setFontStyle("caption")};
    color: ${colors.green};
`;
const Total = styled.h2`
    grid-area: total;
    justify-self: end;
    ${setFontStyle("h2")};
    color: ${colors.green};
`;