import { createGlobalStyle } from "styled-components";

import OpenSans_Regular_Woff from 'assets/fonts/OpenSans-Regular.woff';
import OpenSans_Regular_Woff2 from 'assets/fonts/OpenSans-Regular.woff2';

import Popins_Bold_Woff from 'assets/fonts/Poppins-Bold.woff';
import Popins_Bold_Woff2 from 'assets/fonts/Poppins-Bold.woff2';

import Popins_SemiBold_Woff from 'assets/fonts/Poppins-SemiBold.woff';
import Popins_SemiBold_Woff2 from 'assets/fonts/Poppins-SemiBold.woff2';

import Popins_Medium_Woff from "assets/fonts/Poppins-Medium.woff2";
import Popins_Medium_Woff2 from "assets/fonts/Poppins-Medium.woff2";



export default createGlobalStyle`
    @font-face {
        font-family: 'OpenSans-Regular';
        src: url(${OpenSans_Regular_Woff2}) format('woff2'),
        url(${OpenSans_Regular_Woff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins-Bold';
        src: url(${Popins_Bold_Woff2}) format('woff2'),
        url(${Popins_Bold_Woff}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins-SemiBold';
        src: url(${Popins_SemiBold_Woff2}) format('woff2'),
        url(${Popins_SemiBold_Woff}) format('woff');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins-Medium';
        src: url(${Popins_Medium_Woff2}) format('woff2'),
        url(${Popins_Medium_Woff}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
`;
