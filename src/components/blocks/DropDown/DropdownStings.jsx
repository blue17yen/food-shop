import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { setFont } from "../Text/setFont";
import { colors } from "../../../helpers/colors";

export const DropdownStings = ({ closeDropdown, itemsList = ['nothing'] }) => {
    const history = useHistory();

    const handleClick = (path) => {
        closeDropdown();
        history.push('/products/' + path);
    };

    return (
        <Wrapper>
            <List>
                {itemsList.map((el) => (
                    <Item key={el} onClick={() => handleClick(el)}>{el}</Item>
                ))}
            </List>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.95);
    min-width: 140px;
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
