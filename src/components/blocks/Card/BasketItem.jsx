import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import { setFontStyle, colors, device, decoder } from "helpers/";

import { Numberselector } from "components/blocks/Selector/NumberSelector";
import { CloseIcon } from 'components/Icons/CloseIcon';

import defItemImage from 'assets/images/def-card-img.png';


export const BasketItem = () => {
    const price = 36.99;
    const [numSelected, setNumSelected] = useState(1);

    const handleNumSelector = useCallback((num) => {
        setNumSelected(num);
    }, [])

    return (
        <Wrapper>
            <Inner>
                <LeftBlock>
                    <Image src={defItemImage} />
                    <Functions>
                        <FunctionsItem>
                            <CloseIcon size={14} />
                            Remove
                        </FunctionsItem>
                    </Functions>
                </LeftBlock>
                <RightBlock>
                    <Title>
                        {decoder(`Apple &amp; Eve On The Go, Cranberry Juice Cocktail, 8oz
                        (Pack of 24)`)}
                    </Title>
                    <Total>
                        <Price>{price} USD</Price>
                        <Numberselector
                            callback={handleNumSelector}
                            selected={numSelected}
                        />
                    </Total>
                </RightBlock>
            </Inner>
        </Wrapper>
    );
}


const Wrapper = styled.div``;
const Inner = styled.div`
    min-height: 134px;
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #d1d1d1;
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

    ${setFontStyle("caption")};
    color: ${colors.light_grey};
    cursor: pointer;
`;
const RightBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px
`;
const Title = styled.h4`
    ${setFontStyle("h5")};

    @media ${device.tablet} {
        ${setFontStyle("h4")};
    } ;
`;
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
    ${setFontStyle("h4")};
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
    ${setFontStyle("button")};

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
    ${setFontStyle("h6")};

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