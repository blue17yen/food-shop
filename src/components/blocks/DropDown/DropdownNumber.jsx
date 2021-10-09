import React from "react";
import styled from "styled-components";

import { setFontStyle, colors, range } from "helpers/";


export const DropdownNumber = ({ closeDropdown, itemsList = range(1, 20), value = 1, callback }) => {

    const handleClick = (num) => {
        callback(num);
        closeDropdown();
    };

    return (
        <Wrapper>
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
    padding: 10px 0;

    ${setFontStyle("button")};
    display: grid;
    text-align: center;
    text-transform: uppercase;

    ${({ selected }) =>
        selected &&
        `        background-color: ${colors.green};
        color: #fff;
        cursor: pointer`};
`;
