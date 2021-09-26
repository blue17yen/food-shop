import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import { marginHelper } from './../../../helpers/margin';

const Image = styled.img`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    margin: ${(props) => marginHelper(props.margin)};
`;

const Icon = ({ icon, iconName, size = 20, margin = '0 0 0 0' }) => {
    return <Image src={icon} alt={iconName} size={size} margin={margin} />;
};

Icon.propTypes = {
    size: PropTypes.number,
    margin: PropTypes.string,
    iconName: PropTypes.string,
};

export default Icon;
