import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import { setFont } from '../Text/setFont';
import { colors } from "../../../helpers/colors";
import { cssMP_Helper } from "../../../helpers/margin";
import { Button } from '../Button/Button';
import { Arrowup, Arrowdown } from "../SVG_Components/Arrow";
import { ToolsContext } from './../../Tools/Tools';


export const Numberselector = ({ margin = "0 0 0 0", value = 100}) => {
    const [reference, setReference] = useState(null);
    const popperContext = useContext(ToolsContext).popperInterface;
    const handleClick = () => {
        popperContext.openPopper(reference);
    };

    return (
        <Wrapper onClick={handleClick} ref={setReference} margin={margin}>
            <Count>{value}</Count>
            <Button
                size='sm'
                variant='bright'
                endIcon={popperContext.isOpen ? <Arrowup /> : <Arrowdown />}
            >
                Nmb
            </Button>
        </Wrapper>
    );
};

Numberselector.propType = {
    value: PropTypes.string,
    margin: PropTypes.string,
};

const Wrapper = styled.div`
    min-width: 120px;
    max-width: 140px;
    border: 1px solid #d1d1d1;
    border-radius: 12px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    padding: 0 0 0 5px;

    & button {
        max-width: 78px;
    }
`;
const Count = styled.div`
    flex: 1;
    max-width: 50px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    ${setFont("body")};
`;