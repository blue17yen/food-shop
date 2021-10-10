import React, { useState, useContext } from "react";
import styled from 'styled-components';
// helpers
import { colors, device } from "helpers/";
// context
import { ToolsContext } from "components/Tools/Tools";
// components
import { Arrowup, Arrowdown } from "components/Icons/ArrowIcon";


export const NavMenuItem = ({ title, categories }) => {
    const [reference, setReference] = useState(null);
    const popperContext = useContext(ToolsContext).popperInterface;

    const handleOpenPopper = () => {
        if (reference) {
            popperContext.openPopper({
                newReference: reference,
                variant: "str",
                content: categories,
            });
        }
    };

    return (
        <>
            <Wrapper ref={setReference} onClick={handleOpenPopper}>
                <ItemText>{title}</ItemText>
                {popperContext.isOpen &&
                popperContext.reference === reference ? (
                    <Arrowup color={colors.green} />
                ) : (
                    <Arrowdown color={colors.green} />
                )}
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    min-height: 23px;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
`;

const ItemText = styled.h5`
    font-family: "Poppins-Medium";
    flex-wrap: 500;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.black};
    word-wrap: normal;

    @media ${device.mobileL} {
        font-size: 15px;
        line-height: 22.5px;
    }
`;