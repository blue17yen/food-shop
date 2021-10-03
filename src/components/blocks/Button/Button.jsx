import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import * as Style from './buttonStyles'
import ArrowIco from "./Inner/ArrowIco";
import { cssMP_Helper } from "./../../../helpers/margin";


const ButtonRoot = styled.button.attrs(props => ({
    className: '__button',
    disabled: props.$disabled,
}))`
    ${Style.buttonRoot};
    ${(props) => Style[props.size] ?? Style.md};
    ${(props) => Style[props.variant] ?? Style.normal};
    ${(props) => props.margin && 'margin:' + cssMP_Helper(props.margin)};
    ${(props) => props.padding && 'padding:' + cssMP_Helper(props.padding)};
`;

export const Button = ({children, disabled = false, size = 'md', variant = 'normal', margin = null, padding = null, startArrow = false, endArrow = false}) => {
    return (
        <ButtonRoot
            size={size}
            variant={variant}
            margin={margin}
            padding={padding}
            $disabled={disabled}
        >
            {startArrow && <ArrowIco direction='start' variant={variant} />}
            {children}
            {endArrow && <ArrowIco direction='end' variant={variant} />}
        </ButtonRoot>
    );
}

Button.propTypes = {
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(["lg", "md", "sm"]),
    variant: PropTypes.oneOf(["normal", "filled", "bright"]),
    startArrow: PropTypes.bool,
    endArrow: PropTypes.bool,
};

