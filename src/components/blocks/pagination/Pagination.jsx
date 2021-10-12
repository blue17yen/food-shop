import React from "react";
import styled from 'styled-components';

import { setFontStyle, colors, range } from "helpers/";

import { Arrowleft, Arrowright } from "components/Icons/ArrowIcon";


const LEFT_ARROW = 'LEFT_ARROW';
const RIGHT_ARROW = 'RIGHT_ARROW';


export const Pagination = ({
    totalCount = 1,
    countOnPage = 1,
    currentPage = 0,
    pageNeighbours = 2,
    callback,
}) => {
    function handlePage(page) {

        if (page !== currentPage) {
            callback(page)
        }
    }
    function handlePrevPage() {
        handlePage(currentPage - 1)
    }
    function handleNextPage() {
        handlePage(currentPage + 1);
    }
   
    function makePaginationNumbers() {
        const totalPages = Math.ceil(totalCount / countOnPage);
        const totalNumbers = (pageNeighbours * 2) + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {
            const startPage = Math.max(2, currentPage - pageNeighbours + 1);
            const endPage = Math.min(
                totalPages - 1,
                currentPage + pageNeighbours + 1
            );
            let pages = range(startPage, endPage);

            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (totalPages - endPage) > 1;
            const spillOffset = totalNumbers - (pages.length + 1);

            if (hasLeftSpill && !hasRightSpill) {
                const extraPages = range(
                    startPage - spillOffset,
                    startPage - 1
                );
                pages = [LEFT_ARROW, ...extraPages, ...pages];
            } else if (!hasLeftSpill && hasRightSpill) {
                const extraPages = range(endPage + 1, endPage + spillOffset);
                pages = [...pages, ...extraPages, RIGHT_ARROW];
            } else {
                pages = [LEFT_ARROW, ...pages, RIGHT_ARROW];
            }

            return [1, ...pages, totalPages];
        }
        return range(1, totalPages);
    }



    return (
        <Wrapper>
            <Inner>
                <PageText>Page:</PageText>
                <Pages>
                    {makePaginationNumbers().map((page, idx) => {
                        if (page === LEFT_ARROW) {
                            return (
                                <Arrow
                                    key={LEFT_ARROW}
                                    onClick={handlePrevPage}
                                >
                                    <Arrowleft color={colors.green} />
                                </Arrow>
                            );
                        }
                        if (page === RIGHT_ARROW) {
                            return (
                                <Arrow
                                    key={RIGHT_ARROW}
                                    onClick={handleNextPage}
                                >
                                    <Arrowright color={colors.green} />
                                </Arrow>
                            );
                        }

                        return <Page key={idx} $current={ page - 1 === currentPage } onClick={() => handlePage(page - 1) }>{page}</Page>;
                    })}
                </Pages>
            </Inner>
        </Wrapper>
    );
};

const Wrapper = styled.div``;
const Inner = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;

    ${setFontStyle("body")};
`;
const PageText = styled.p`
    color: ${colors.light_grey};
`;

const Pages = styled.span`
    display: flex;
    gap: 8px;
`;
const Page = styled.button`
    width: 20px;
    border: none;
    background: transparent;
    cursor: pointer;

    ${({ $current }) =>
        $current && `color: ${colors.green}`}
`;
const Arrow = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
`;