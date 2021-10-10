import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { setFontStyle, colors} from "helpers/";


export const DropdownStings = ({ closeDropdown, itemsList = ['nothing'] }) => {
    const history = useHistory();

    const handleClick = (path) => {
        closeDropdown();
        history.push(path);
    };

    return (
        <Wrapper>
            <List>
                {itemsList.map((el) => (
                    <Item key={el.path} onClick={() => handleClick(el.path)}>{el.title}</Item>
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

    ${setFontStyle("button")};
    display: grid;
    text-align: center;

    &:hover {
        background-color: ${colors.green};
        color: #fff;
        cursor: pointer;
    }
`;
