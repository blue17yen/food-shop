import React, { useState, useContext } from "react";
import styled from 'styled-components';
// helpers
import { colors } from "helpers/";
// context
import { ToolsContext } from "components/Tools/Tools";
// components
import { Arrowup, Arrowdown } from "components/Icons/ArrowIcon";


const category = ["apple", "orange", "banana", "pineapple"];

export const Item = ({ children }) => {
    const [reference, setReference] = useState(null)
    const popperContext = useContext(ToolsContext).popperInterface;

    const handleOpenPopper = () => {
        if (reference) {
            popperContext.openPopper({
                newReference: reference,
                variant: "str",
                content: category,
            });
        }
    }

    return (
        <>
            <Wrapper ref={setReference} onClick={handleOpenPopper}>
                {children}
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