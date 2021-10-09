import { css } from "styled-components";
import { colors } from "helpers/colors";

import { setFontStyle } from "helpers/";

/* styles common to all buttons */
export const buttonRoot = css`
    border-width: 2px;
    border-style: solid;
    border-radius: 12px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ${setFontStyle('button')};

    cursor: pointer;


`;

/* theme variants */
export const normal = css`
    border-color: #92c064;
    background: transparent;
    color: ${colors.black};


`;
export const filled = css`
    border-color: #46760a;
    background: ${colors.green};
    color: #fff;

    &:disabled {
        background: ${colors.light_grey};
        border-color: ${colors.light_grey};
        color: ${colors.smoky_white};
    }
`;
export const bright = css`
    background: #f5f5f5;
    border: 2px solid #f5f5f5;
`;

/* size variants */
export const lg = css`
    padding: 18px 48px;
`;
export const md = css`
    padding: 12px 16px;
`;
export const sm = css`
    padding: 12px;
`;
