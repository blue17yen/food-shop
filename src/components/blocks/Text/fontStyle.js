
import { css } from 'styled-components';

const poppins700 = css`
    font-family: "Poppins-Bold";
    font-weight: 700;
`
const poppins600 = css`
    font-family: "Poppins-SemiBold";
    font-weight: 600;
`
const poppins500 = css`
    font-family: "Poppins-Medium";
    font-weight: 500;
`;
const openSans400 = css`
    font-family: "OpenSans-Regular";
    font-weight: 400;
`;

export const h1 = css`
    ${poppins600};
    font-size: 32px;
    line-height: 44.8px;
`;

export const h2 = css`
    ${poppins600};
    font-size: 26px;
    line-height: 39px;
`;
export const h3 = css`
    ${poppins600};
    font-size: 22px;
    line-height: 33px;
`;
export const h4 = css`
    ${poppins600};
    font-size: 18px;
    line-height: 27px;
`;
export const h5 = css`
    ${poppins500};
    font-size: 15px;
    line-height: 22.5px;
`;
export const h6 = css`
    ${poppins600};
    font-size: 12px;
    line-height: 18px;
`;
export const button = css`
    ${h5};
    ${poppins700};
`;
export const lead = css`
    ${openSans400};
    font-size: 17px;
    line-height: 23.15px;
`;
export const body = css`
    ${openSans400};
    font-size: 14px;
    line-height: 19.07px;
`;
export const caption = css`
    ${openSans400};
    font-size: 12px;
    line-height: 16.34px;
`;


