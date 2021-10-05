import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { setFont } from "./../Text/setFont";
import { colors } from "./../../../helpers/colors";

export const Dropdown = ({ closeDropdown }) => {
    const history = useHistory();

    const handleClick = (path) => {
        closeDropdown();
        history.push('/products/' + path);
    };

    return (
        <Wrapper>
            <List>
                <Item onClick={() => handleClick('apple')}>apple</Item>
                <Item onClick={() => handleClick('orange')}>orange</Item>
                <Item onClick={() => handleClick('banana')}>banana</Item>
                <Item onClick={() => handleClick('pineapple')}>pineapple</Item>
            </List>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.95);
    max-width: 160px;
    padding: 10px;
    box-shadow: 0 2px 6px 0 ${colors.light_grey};
    border-radius: 12px;
`;
const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
`;
const Item = styled.li`
    width: 100%;
    max-width: 140px;
    padding: 10px 0;

    ${setFont("button")};
    display: grid;
    text-align: center;
    text-transform: uppercase;

    &:hover {
        background-color: ${colors.green};
        color: #fff;
        cursor: pointer;
    }
`;
