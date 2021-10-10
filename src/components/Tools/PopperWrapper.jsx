import React, { useState, useContext, useCallback } from "react";
import styled from "styled-components";
import { usePopper } from "react-popper";
// components
import { DropdownStings } from "components/blocks/DropDown/DropdownStings";
import { DropdownNumber } from "components/blocks/DropDown/DropdownNumber";
// context
import { ToolsContext } from "./Tools";
// hooks
import { usePopperOnClickOutside } from "helpers/hooks/usePopperOnClickOutside";


export const PopperWrapper = () => {
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
    }, [popperContext]);

    return (
        <>
            {popperContext.isOpen && (
                <Wrapper
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                >
                    {popperContext.variant === "str" ? (
                        <DropdownStings
                            closeDropdown={closeAfterSelect}
                            itemsList={popperContext.itemsList}
                        />
                    ) : (
                        <DropdownNumber
                            closeDropdown={closeAfterSelect}
                            value={popperContext.value}
                            itemsList={popperContext.itemList}
                            callback={popperContext.callback}
                        />
                    )}
                </Wrapper>
            )}
        </>
    );
};

const Wrapper = styled.div`
    min-width: 50px;
    max-width: 200px;
`;
