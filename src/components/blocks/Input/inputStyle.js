import { css } from 'styled-components';
import { colors } from "../../../helpers/colors";


export const inputRoot = css`
    width: 100%;
    /* min-width: 240px; */
    max-width: 320px;
    min-height: 42px;

    background: #f9f9f9;
    border: 1px solid #d1d1d1;
    border-radius: 12px;
    padding: 12px 16px 12px 20px;

    font-family: "OpenSans-Regular";
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: ${colors.black};
    &::placeholder {
        font-family: "OpenSans-Regular";
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #a9a9a9;
    }
`;