import React from 'react';
import styled from 'styled-components';

import { colors } from 'helpers/';


export const ProductTags = () => {
    return (
        <Wrapper>
            <Head>Product tags</Head>
            <TagWrapper>
                <Tag>
                    <TagText>Beans</TagText>
                </Tag>
                <Tag>
                    <TagText>Carrots</TagText>
                </Tag>
                <Tag>
                    <TagText>Apples</TagText>
                </Tag>
                <Tag>
                    <TagText>Garlic</TagText>
                </Tag>
                <Tag>
                    <TagText>Mushrooms</TagText>
                </Tag>
            </TagWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Head = styled.h4`
    font-family: "Poppins-SemiBold";
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: ${colors.black};
    margin: 0 0 16px;
`;
const TagWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
`;
const Tag = styled.span`
    background: #f5f5f5;
    border-radius: 12px;
    padding: 4px 10px;
    text-align: center;
`;
const TagText = styled.h6`
    font-family: "Poppins-SemiBold";
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.black};
`;


