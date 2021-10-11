import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import styled from "styled-components";

import { setFontStyle, colors, decoder } from "helpers/";

import { Button } from "components/blocks/Button/Button";
import { Disableprise } from "components/blocks/NoProducts/DisablePrise";
import { BasketIcon } from "components/Icons/BasketIcon";

import defaultImage from "assets/images/def-card-img.png";

import { addProduct } from "redux/basketSlice";


export const Card = ({product}) => {
    const { id,
    image = defaultImage,
    title = "Product title",
    brand = null,
    breadcrumbs = [],
    price = null } = product;

    
    const history = useHistory();
    const dispatch = useDispatch();
    const isAddedToBasket = useSelector(
        (state) => Boolean(state.basket.basketProducts[id]?.id)
    );

    const handleOpenProduct = () => {
        console.log(product);
        window.scrollTo(0, 0);
        history.push(`/product/${id}`, { ...product });
    };
    const handleAddToBasket = () => {
        if (!isAddedToBasket) {
            dispatch(addProduct({ product, newCount: 1 }));
        } 
    };

    return (
        <Wrapper>
            <Inner>
                <Image src={image} onClick={handleOpenProduct} />
                <Info>
                    <Brand>{brand}</Brand>
                    <Title onClick={handleOpenProduct}>{decoder(title)}</Title>
                    <BreadCrumbs>
                        {breadcrumbs.slice(0, 3).map((bc) => (
                            <NavLink to={bc} key={bc}>
                                <BreadCrumb>{bc}</BreadCrumb>
                            </NavLink>
                        ))}
                    </BreadCrumbs>
                </Info>
                <CostBlock>
                    <Price>
                        <Disableprise price={price} />
                    </Price>
                    {!isAddedToBasket ? (
                        <Button
                            variant='filled'
                            size='sm'
                            padding='6.5 12'
                            disabled={!Boolean(price)}
                            onClick={handleAddToBasket}
                        >
                            Buy Now
                        </Button>
                    ) : (
                        <Button
                            variant='filled'
                            size='sm'
                            padding='6.5 12'
                            disabled={true}
                            endIcon={<BasketIcon size={16}/>}
                        >
                            In basket
                        </Button>
                    )}
                </CostBlock>
            </Inner>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    max-width: 270px;
    min-height: 324px;
    background-color: #fff;
    border: 1px solid #d1d1d1;
    border-radius: 12px;
    padding: 16px 16px;
`;

const Inner = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Image = styled.img`
    width: 237px;
    height: 180px;
    margin: 0 0 16px;
    object-fit: contain;
    cursor: pointer;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    margin: 0 0 16px;
`;

const Title = styled.h5`
    ${setFontStyle("h5")};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const Brand = styled.p`
    ${setFontStyle("caption")};
    color: #575757;
`;

const BreadCrumbs = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
`;
const BreadCrumb = styled.p`
    ${setFontStyle("caption", true)};
    color: ${colors.green};
`;

const CostBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Price = styled.h4`
    ${setFontStyle("h4")};
`;
