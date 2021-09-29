import { css } from 'styled-components';
import { colors } from '../../../helpers/colors';
import * as FONT from './text'

const defaultColor = css`
    color: ${colors.black};
`;

export function setFont(font, underline = false) {
    return css`
        ${FONT[font]};
        ${defaultColor};
        ${underline && `text-decoration: underline`};
    `;
}
