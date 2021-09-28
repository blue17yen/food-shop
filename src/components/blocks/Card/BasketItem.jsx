import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { device } from "../../../helpers/device";
import { colors } from "../../../helpers/colors";
import { setFont } from '../Text/setFont';
import { Button } from '../Button/Button';

import defItemImage from '../../../assets/images/def-card-img.png';


const Wrapper = styled.div`

`
const Inner = styled.div`
    min-height: 180px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`
const Image = styled.img`
    flex: 1;
    max-width: 33%;
    margin: 0 16px 0 0;

    @media ${device.mobileL} {
        max-width: 280px;
    } ;
`;

const Content = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 16px;

`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &:not(:first-child) {
        align-items: flex-end;
    }
`;

const Head = styled.div`
    margin: 0 0 16px;
`

const Title = styled.h4`
    ${setFont('h4')};
`
const SubTitle = styled.h4`
    ${setFont("body")};
    color: #575757;
`;

const Count = styled.div`
    background-color: #fff;
    border: 1px solid ${colors.light_grey};
    min-height: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;

const CountButton = styled.button`
    flex: 1;
    min-width: 30px;
    max-width: 30px;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${setFont("button")};
`;

const CountValue = styled.div`
    flex: 1;
    min-width: 40px;
    max-width: 80px;
    overflow: hidden;
    padding: 5px 5px;
    background-color: rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    ${setFont("h6")};
`;

const Price = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const BasketItem = () => {
    const price = 36.99;
    const [state, setstate] = useState(1);
    const [priceS, setPriceS] = useState(price)

    useEffect(() => {
        setPriceS((price * state).toFixed(2));
    }, [state]);

    return (
        <Wrapper>
            <Inner>
                <Image src={defItemImage} />
                <Content>
                    <Column>
                        <Head>
                            <Title>Product title</Title>
                            <SubTitle>
                                Space for a small product description
                            </SubTitle>
                        </Head>
                        <Count>
                            <CountButton
                                onClick={() => setstate((prev) => prev - 1)}
                            >
                                -
                            </CountButton>
                            <CountValue>{state}</CountValue>
                            <CountButton
                                onClick={() => setstate((prev) => prev + 1)}
                            >
                                +
                            </CountButton>
                        </Count>
                    </Column>
                    <Column>
                        <Price>
                            <SubTitle>Итого:</SubTitle>
                            <Title>{priceS} USD</Title>
                        </Price>
                    </Column>
                </Content>
            </Inner>
        </Wrapper>
    );
}
