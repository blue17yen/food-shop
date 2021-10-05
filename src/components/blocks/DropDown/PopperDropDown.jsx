import React, { useState, useContext, useCallback } from "react";
import styled from "styled-components";
// components
import { Dropdown } from "./DropDown";

// context
import { ToolsContext } from "../../Tools/Tools";

// hooks
import { usePopper } from "react-popper";
import { usePopperOnClickOutside } from "../../../helpers/hooks/usePopperOnClickOutside";


export const PopperDropDown = () => {
    const popperContext = useContext(ToolsContext).popperInterface;
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(
        popperContext.reference,
        popperElement,
        {
            modifiers: [
                {
                    name: "offset",
                    options: {
                        offset: [0, 10],
                    },
                },
                {
                    name: "preventOverflow",
                    options: {
                        padding: 10,
                    },
                },
            ],
        }
    );
    usePopperOnClickOutside(popperElement, popperContext.closePopper);

    const closeAfterSelect = useCallback(() => {
        popperContext.closePopper();
    },[])

    return (
        <>
            {popperContext.isOpen && (
                <Wrapper
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                >
                    <Dropdown closeDropdown={closeAfterSelect} />
                </Wrapper>
            )}
        </>
    );
};

const Wrapper = styled.div`
    min-width: 160px;
    max-width: 200px;
`;
