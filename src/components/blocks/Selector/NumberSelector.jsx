import React, { useState, useContext, useCallback } from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

import { setFontStyle, range } from "helpers/";

import { Arrowup, Arrowdown } from "components/Icons/ArrowIcon";

import { Button } from "components/blocks/Button/Button";
import { ToolsContext } from 'components/Tools/Tools';


export const Numberselector = ({ margin = "0 0 0 0", selected = 1, callback, textButton = 'Nmb'}) => {
    const [reference, setReference] = useState(null);
    const popperContext = useContext(ToolsContext).popperInterface;
    const changingCallback = useCallback((el) => {
        callback(el);
    },[]); 
    const handleClick = () => {
        popperContext.openPopper({
            newReference: reference,
            variant: "num",
            content: range(1, 10),
            value: selected,
            callback: changingCallback,
        });
    };

    return (
        <Wrapper onClick={handleClick} ref={setReference} margin={margin}>
            <Count>{selected}</Count>
            <Button
                size='sm'
                variant='bright'
                endIcon={
                    popperContext.isOpen &&
                    popperContext.reference === reference ? (
                        <Arrowup />
                    ) : (
                        <Arrowdown />
                    )
                }
            >
                {textButton}
            </Button>
        </Wrapper>
    );
};

Numberselector.propType = {
    selected: PropTypes.number,
    callback: PropTypes.fucn,
    textButton: PropTypes.string,
    margin: PropTypes.string,
};
const Wrapper = styled.div`
    min-width: 120px;
    max-width: 140px;
    min-height: 38px;
    max-height: 50px;
    background: transparent;
    border: 1px solid #d1d1d1;
    border-radius: 12px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    padding: 0 0 0 5px;

    & button {
        max-width: 78px;
        max-height: 38px;
        background: transparent;
        border-color: transparent;
    }
`;
const Count = styled.div`
    flex: 1;
    max-width: 50px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    ${setFontStyle("body")};
`;