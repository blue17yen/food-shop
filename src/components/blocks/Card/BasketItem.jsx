import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setFontStyle, colors, device, decoder } from "helpers/";

import { Numberselector } from "components/blocks/Selector/NumberSelector";
import { Like } from "components/blocks/Like/Like";
import { CloseIcon } from 'components/Icons/CloseIcon';

import defItemImage from 'assets/images/def-card-img.png';

import { removeProduct, updateProduct } from 'redux/basketSlice';


export const BasketItem = ({ product }) => {
    const { id, image = defItemImage, title, count, price } = product;

    const dispatch = useDispatch();
    const handleNumSelector = (num) => {
        dispatch(updateProduct({ id, newCount: num }));
    };

    const handleDelete = () => {
        dispatch(removeProduct({ id }));
    };

    return (
        <Wrapper>
            <Inner>
                <LeftBlock>
                    <NavLink to={`/product/${id}`}>
                        <Image src={image} />
                    </NavLink>
                    <Functions>
                        <FunctionsItem onClick={handleDelete}>
                            <CloseIcon size={14} />
                            Remove
                        </FunctionsItem>
                        <Like product={product} />
                    </Functions>
                </LeftBlock>
                <RightBlock>
                    <Title>
                        <NavLink to={`/product/${id}`}>
                            {decoder(title)}
                        </NavLink>
                    </Title>
                    <Total>
                        <Price>{price} USD</Price>
                        <Numberselector
                            callback={handleNumSelector}
                            selected={count}
                        />
                    </Total>
                </RightBlock>
            </Inner>
        </Wrapper>
    );
};


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
    object-fit: contain;
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

    &:hover {
        text-decoration: underline;
    }

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
