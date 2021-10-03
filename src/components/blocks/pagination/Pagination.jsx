import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { setFont } from '../Text/setFont';
import { colors } from './../../../helpers/colors';


export const Pagination = ({totalCount = 25, countOnPage = 5, selected = 1, callback}) => {
    const [state, setState] = useState(Array(totalCount / countOnPage).fill('').map((_, i) => ({
                num: i + 1,
                selected: i + 1 === selected,
            })));

    useEffect(() => {
        setState((prev) =>
            prev.forEach((_, i) => ({
                num: i + 1,
                selected: i + 1 === selected,
            }))
        );
    }, [selected]);

    function handleClick(num) {
        if (num !== selected) {
            callback(num);
        };
    }

    return (
        <Wrapper>
            <Inner>
                <PageText>Page:</PageText>
                <Pages>
                    {state.map((el) => (
                        <Page
                            $selected={el.selected}
                            onClick={() => handleClick(el.num)}
                            key={`${el.num}-pagination`}
                        >
                            {el.num}
                        </Page>
                    ))}
                </Pages>
            </Inner>
        </Wrapper>
    );
}

const Wrapper = styled.div``;
const Inner = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;

    ${setFont("caption")};
`;
const PageText = styled.p`
    color: ${colors.light_grey};
`;

const Pages = styled.span`
    display: flex;
    gap: 8px;
`;
const Page = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;

    ${({ $selected }) =>
        $selected && `${setFont("button", true)}; color: ${colors.green}`}
`;