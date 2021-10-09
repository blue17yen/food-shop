import React from 'react';
import styled from 'styled-components';

import { colors } from 'helpers/';

export const Disableprise = ({price}) => {
    return (
        <>{!price ? <Grey>not available</Grey> : `${price.toFixed(2)} USD`}</>
    );
}

const Grey = styled.span`
    color: ${colors.light_grey};
` 
