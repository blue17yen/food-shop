import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container/Container';
import { CardItem } from '../components/blocks/Card/CardItem';
import { colors } from '../helpers/colors';
import { setFont } from '../components/blocks/Text/setFont';
import { Button } from './../components/blocks/Button/Button';
import { InputWithButton } from '../components/blocks/Input/InputWithButton';

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const Basket = () => {

    const date = new Date(); 
    const day = date.getDate() + 1;
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dateStr = `${month} ${day}, ${year}`;    

    return (
        <Wrapper>
            <Container>
                <Inner>
                    <Head>
                        <Title>Order Summary</Title>
                        <SubTitle>
                            Price can change depending on shipping method and
                            taxes of your state.
                        </SubTitle>
                    </Head>
                    <Cards>
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </Cards>
                    <Continue>Continue shopping</Continue>
                    <Summary>
                        <SummaryItem>
                            <SummaryName>Subtotal</SummaryName>
                            <SummaryCalue>73.98 USD</SummaryCalue>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryName>Tax</SummaryName>
                            <SummaryCalue>17% 16.53 USD</SummaryCalue>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryName>Shipping</SummaryName>
                            <SummaryCalue>0 USD</SummaryCalue>
                        </SummaryItem>
                    </Summary>
                    <PromoCode>
                        <InputWithButton buttonText={"Apply now"} />
                    </PromoCode>
                    <TotalOrder>
                        <TotalOrderTitle>Total Order</TotalOrderTitle>
                        <DeliveryDate>
                            Guaranteed delivery day: {dateStr}
                        </DeliveryDate>
                        <Total>89.84 USD</Total>
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
`;
const Head = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    margin: 0 0 40px;
`;
const Title = styled.h3`
    ${setFont("h3")};
    margin: 0 0 4px;
`;
const SubTitle = styled.p`
    ${setFont("caption")};
`;
const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 0 0 40px;
`;
const Continue = styled.h4`
    ${setFont("h5", true)};
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

    ${setFont("h6")};
`;
const SummaryName = styled.div`
    justify-self: flex-start;
`;
const SummaryCalue = styled.div`
    justify-self: flex-end;
`;

const PromoCode = styled.div`
    margin: 0 0 40px;
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
    ${setFont("h6")};
`;
const DeliveryDate = styled.p`
    grid-area: delivery;
    ${setFont("caption")};
    color: ${colors.green};
`;
const Total = styled.h2`
    grid-area: total;
    justify-self: end;
    ${setFont("h2")};
    color: ${colors.green};
`;