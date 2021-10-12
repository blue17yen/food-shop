import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { appContent,colors, setFontStyle } from "helpers/";


export const ProductTags = () => {
    return (
        <Wrapper>
            <Head>Product tags</Head>
            <TagWrapper>
                {appContent.map((cont) =>
                    cont.categories.map((category) => (
                        <Tag key={category.path}    >
                            <NavLink to={category.path}>
                                <TagText>{category.title}</TagText>
                            </NavLink>
                        </Tag>
                    ))
                )}
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
    max-width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 8px;
`;
const Tag = styled.span`
    background: #f5f5f5;
    border-radius: 12px;
    padding: 4px 10px;
    text-align: center;

    &:hover {
        background: ${colors.blue};
        & h6 {
            color: ${colors.blaks};
        }
    }
`;
const TagText = styled.h6`
    ${setFontStyle("h6")}
`;


