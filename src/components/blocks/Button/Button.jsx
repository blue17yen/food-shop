import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../helpers/colors';

const ButtonDefault = styled.button`
    background: transparent;
    border: 2px solid #92C064;
    border-radius: 12px;
    padding: 18px 48px;

    font-family: 'Poppins-Bold';
    font-weight: 700;
    font-size: 15px;
    line-height: 22.5px;
    color: ${colors.black};
    cursor: pointer;

    margin: 0 0 0 20px;
`;
const ButtonDefaultMedium = styled(ButtonDefault)`
    padding: 12px 16px;
`;
const ButtonDefaultSmall = styled(ButtonDefault)`
    padding: 12px;
`;


const ButtonFilled = styled(ButtonDefault)`
    background: ${colors.green};
    border: 2px solid #6a983c;
    
    color: #fff;
`;
const ButtonFilledMedium = styled(ButtonFilled)`
    padding: 12px 16px;
`;
const ButtonFilledSmall = styled(ButtonFilled)`
    padding: 12px;
`;

const ButtonBright = styled(ButtonDefault)`
    background: #f5f5f5;
    border: 2px solid #f5f5f5;
`;

const ButtonBrightMedium = styled(ButtonDefault)`
    padding: 12px 16px;
`;

const ButtonBrightSmall = styled(ButtonDefault)`
    padding: 12px;
`;


const Button = ({children, size = 'bg', variant = 'normal'}) => {

    

    switch (size) {
        case 'bg': 
            return <ButtonDefault>{children}</ButtonDefault>;
        case "md":
            return <ButtonDefaultMedium>{children}</ButtonDefaultMedium>;
        case "sm":
            return <ButtonDefaultSmall>{children}</ButtonDefaultSmall>;
        default:
            return <ButtonDefault>{children}</ButtonDefault>;
    }

}

export default Button;
