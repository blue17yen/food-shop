import { css } from 'styled-components';
import { colors } from 'helpers/colors';
import * as FONT from './fontStyle'

export function setFontStyle(font, underline = false) {
    const defaultColor = css`
        color: ${colors.black};
    `;
    
    return css`
        ${FONT[font]};
        ${defaultColor};
        ${underline && `text-decoration: underline`};
    `;
}
