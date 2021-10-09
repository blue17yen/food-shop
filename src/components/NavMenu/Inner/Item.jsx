import React, { useState, useContext } from "react";
import styled from 'styled-components';
// context
import { ToolsContext } from "components/Tools/Tools";
// components
import { Icon } from "components/blocks/Icon/Icon";
// image
import downArrowSVG from "assets/svg/arrows/down-arrow.svg";
import upArrowSVG from "assets/svg/arrows/up-arrow.svg";


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
                    <Icon
                        icon={upArrowSVG}
                        iconName={"upArrowSVG"}
                        size={18}
                        margin={"0 0 0 5"}
                    />
                ) : (
                    <Icon
                        icon={downArrowSVG}
                        iconName={"downArrowSVG"}
                        size={18}
                        margin={"0 0 0 5"}
                    />
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