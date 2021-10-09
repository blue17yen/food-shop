import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { css_indent } from "helpers/";

import * as Style from "./buttonStyles";

import { ButtonIco } from "./Inner/ButtonIco";



const ButtonRoot = styled.button.attrs((props) => ({
    className: "__button",
    disabled: props.$disabled,
}))`
    ${Style.buttonRoot};
    ${(props) => Style[props.size] ?? Style.md};
    ${(props) => Style[props.variant] ?? Style.normal};
    ${(props) => props.margin && "margin:" + css_indent(props.margin)};
    ${(props) => props.padding && "padding:" + css_indent(props.padding)};
`;

export const Button = ({
    children,
    disabled = false,
    size = "md",
    variant = "normal",
    margin = null,
    padding = null,
    startIcon = null,
    endIcon = null,
}) => {
    return (
        <ButtonRoot
            size={size}
            variant={variant}
            margin={margin}
            padding={padding}
            $disabled={disabled}
        >
            {startIcon && (
                <ButtonIco
                    direction='start'
                    icon={startIcon}
                    variant={variant}
                />
            )}
            {children}
            {endIcon && (
                <ButtonIco direction='end' icon={endIcon} variant={variant} />
            )}
        </ButtonRoot>
    );
};

Button.propTypes = {
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(["lg", "md", "sm"]),
    variant: PropTypes.oneOf(["normal", "filled", "bright"]),
    startArrow: PropTypes.bool,
    endArrow: PropTypes.bool,
};
