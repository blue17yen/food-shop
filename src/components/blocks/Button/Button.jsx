import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import * as Style from './buttonStyles'
import ArrowIco from "./Inner/ArrowIco";

const ButtonRoot = styled.button`
    ${Style.buttonRoot}
    ${(props) => Style[props.size] ?? Style.md}
    ${(props) => Style[props.variant] ?? Style.normal}
    ${(props) => Style.margin(props.margin)}
`;

const Button = ({children, size = 'md', variant = 'normal', margin = '0 0 0 0', startArrow = false, endArrow = false}) => {
    return (
        <ButtonRoot
            size={size}
            variant={variant}
            margin={margin}
        >
            {startArrow && <ArrowIco direction='start' variant={variant} />}
            {children}
            {endArrow && <ArrowIco direction='end' variant={variant} />}
        </ButtonRoot>
    );
}

Button.propTypes = {
    size: PropTypes.oneOf(["lg", "md", "sm"]),
    variant: PropTypes.oneOf(["normal", "filled", "bright"]),
    startArrow: PropTypes.bool,
    endArrow: PropTypes.bool,
};

export default Button;
