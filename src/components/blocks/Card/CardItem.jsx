import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { device } from "../../../helpers/device";
import { colors } from "../../../helpers/colors";
import { setFont } from '../Text/setFont';
import { Button } from '../Button/Button';
import Icon from '../Icon/Icon';

import defItemImage from '../../../assets/images/def-card-img.png';
import closeIco from '../../../assets/svg/ic-actions-close.svg'


const Wrapper = styled.div`

`
const Inner = styled.div`
    min-height: 134px;
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #D1D1D1;
    padding: 0 0 20px 0;
    @media ${device.mobileL} {
        min-height: 154px;
    }
`;
const LeftBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 12px; 
    margin: 0 16px 0 0;
`;
const Image = styled.img`
    width: 100px;
    height: 67px;
    border-radius: 12px;
`;
const Functions = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 8px;
`;
const FunctionsItem = styled.li`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    column-gap: 6px;

    ${setFont('caption')};
    color: ${colors.light_grey};
    cursor: pointer;
`;
const RightBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Title = styled.h5`
    ${setFont('h5')};
`
const Total = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    @media ${device.mobileL} {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        gap: 0;
    }
`;
const Price = styled.h4`
    ${setFont("h4")};
    color: ${colors.green};

`;
const Count = styled.div`
    min-height: 30px;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #d1d1d1;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-self: flex-end;

    @media ${device.mobileL} {
        align-self: unset;
    } ;
`;
const CountButton = styled.button`
    flex: 1;
    min-width: 25px;
    max-width: 25px;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${setFont("button")};

    &:disabled {
        background: rgba(0, 0, 0, 0.05);
    }
`;
const CountValue = styled.div`
    flex: 1;
    min-width: 30px;
    max-width: 60px;
    overflow: hidden;
    padding: 5px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${setFont("h6")};

    position: relative;

    &::before,
    &::after {
        content: "";
        z-index: 2;
        position: absolute;
        left: -2px;
        top: 0;
        bottom: 0;
        height: 80%;
        width: 2px;
        background: rgba(0, 0, 0, 0.1);
        margin: auto 0;
    }
    &::after {
        left: unset;
        right: -2px;
    }
`;


export const CardItem = () => {
    const price = 36.99;
    const [state, setstate] = useState(1);
    const [priceS, setPriceS] = useState(price)

    useEffect(() => {
        setPriceS(Math.ceil(price * state * 100) / 100);
    }, [state]);

    return (
        <Wrapper>
            <Inner>
                <LeftBlock>
                    <Image src={defItemImage} />
                    <Functions>
                        <FunctionsItem>
                            <Icon
                                icon={closeIco}
                                size={12}
                                iconName={"closeIco"}
                            />
                            Remove
                        </FunctionsItem>
                    </Functions>
                </LeftBlock>
                <RightBlock>
                    <Title>Product title</Title>
                    <Total>
                        <Price>{priceS} USD</Price>
                        <Count>
                            <CountButton
                                disabled={state === 1}
                                onClick={() => setstate((prev) => prev === 1 ? prev : prev - 1)}
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
                    </Total>
                </RightBlock>
            </Inner>
        </Wrapper>
    );
}
