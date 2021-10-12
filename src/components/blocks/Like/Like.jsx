import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

import { colors, setFontStyle } from "helpers/";

import { HeartIcon, HeartFilledIcon } from "components/Icons/HeartIcon";

import { addLiked, removeLiked } from 'redux/likedSlice';



export const Like = ({product}) => {
    const dispatch = useDispatch();

    const isLiked = useSelector((state) =>
        state.liked.orderLikeds.includes(product.id)
    );

    const handleLike = () => {
        dispatch(addLiked({ product }));
    };
    const handleUnLike = () => {
        dispatch(removeLiked({ id: product.id }));
    };


    if (!isLiked) {
        return (
            <LikeWrapper onClick={handleLike}>
                <HeartIcon color={colors.red} size={14} />
                No liked
            </LikeWrapper>
        );
    }
    
    return (
        <LikeWrapper onClick={handleUnLike}>
            <HeartFilledIcon color={colors.red} size={14} />
            Liked
        </LikeWrapper>
    );
}

const LikeWrapper = styled.span`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    column-gap: 6px;

    ${setFontStyle("caption")};
    color: ${colors.light_grey};
    cursor: pointer;
`;