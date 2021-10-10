import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import { setFontStyle, colors, range } from "helpers/";

const calculateScrollTo = (heightCont, to) => {

}


export const DropdownNumber = ({ closeDropdown, itemsList = range(1, 20), value = 1, callback }) => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const list = wrapperRef.current.children[0];
        const selectedItem = list.children[value - 1];
        const upByOne = selectedItem.offsetTop - selectedItem.offsetHeight - 10;
        wrapperRef.current.scrollTo(0, upByOne);
    } , []);

    const handleClick = (num) => {
        callback(num);
        closeDropdown();
    };

    return (
        <Wrapper ref={wrapperRef}>
            <List>
                {itemsList.map((el) => (
                    <Item
                        selected={value === el}
                        key={el}
                        onClick={() => handleClick(el)}
                    >
                        {el}
                    </Item>
                ))}
            </List>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.95);
    max-width: 160px;
    max-height: 250px;
    overflow: auto;
    padding: 10px;
    box-shadow: 0 2px 6px 0 ${colors.light_grey};
    border-radius: 12px;
`;
const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 5px;
`;
const Item = styled.li`
    width: 100%;
    max-width: 140px;
    padding: 10px 5px;

    ${setFontStyle("button")};
    display: grid;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        background-color: ${colors.green};
        color: #fff;
    }

    ${({ selected }) =>
        selected &&
        `background-color: ${colors.green};
        color: #fff`};
`;
