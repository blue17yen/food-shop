import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { InputSearch } from '../blocks/Input/InputSearch';
import { Icon } from './../blocks/Icon/Icon';
import { useDebounce } from './../../helpers/hooks/useDebounse';
import SearchIco from "../../assets/svg/ic-actions-search.svg";
import { SearchIcon } from './../blocks/SVG_Components/SearchIcon';
import { Arrowright } from "../blocks/SVG_Components/Arrow";
import { colors } from "../../helpers/colors";
import { RemoveTab } from './../blocks/SVG_Components/RemoveTab';
import { device } from './../../helpers/device';


export const Search = () => {
    const history = useHistory();
    const [inputVal, setInputVal] = useState('');
    const handleChange = (e) => {
        setInputVal(e.target.value);
    }
    const debousedValue = useDebounce(inputVal, 1000);
    useEffect(() => {
        if (debousedValue.length) {
            history.push(`/products/${debousedValue}`);
        }
    }, [debousedValue]);

    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef(null)
    const handleIconOpen = () => {
        setIsOpen(true)
    }
    const handleIconClose = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                inputRef.current.focus();
                inputRef.current.click();
            }, 100);
        }
    }, [isOpen]);


    return (
        <>
            <WrapperIcon onClick={handleIconOpen} isOpen={isOpen}>
                <SearchIcon />
            </WrapperIcon>

            <WrapperInput isOpen={isOpen}>
                <InputSearch
                    refImp={inputRef}
                    value={inputVal}
                    onChange={handleChange}
                />
                <Remove onClick={handleIconClose}>
                    <RemoveTab color={colors.red} size='32' />
                </Remove>
            </WrapperInput>
        </>
    );
}


const WrapperIcon = styled.div`
    position: absolute;
    right: 88px;
    cursor: pointer;
    display: flex;

    ${({ isOpen }) => isOpen && `display: none`};

    @media ${device.mobileL} {
        display: none;
    };
`;
const WrapperInput = styled.div`
    position: absolute;
    width: 100%;
    padding: 0 84px 0 0;
    display: flex;
    align-items: center;
    gap: 6px;

    ${({ isOpen }) => !isOpen && `transform: translateX(-200%)`};
    transition: all 0.3s ease-in-out;

    @media ${device.mobileL} {
        padding: 0;
        width: 270px;
        left: 50%;
        transform: translateX(-40%);
    }
    @media ${device.tablet} {
        width: 330px;
    }
    @media ${device.laptopS} {
        width: 360px;
    } ;
`; 
const Remove = styled.div`
    cursor: pointer;
    @media ${device.mobileL} {
        display: none;
    } ;
`; 