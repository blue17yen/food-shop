import React from "react";
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

import { setFontStyle, css_indent, device, colors } from "helpers/";

import { Button } from "components/blocks/Button/Button";
import { Arrowright } from "components/Icons/ArrowIcon";

import { useValidateImageUrl } from 'helpers/hooks/useValidateImageUrl';

import BgBannerMeat from "assets/images/bg-banner-meat.png";


export const Banner = ({
    title = "Title",
    subTitle = null,
    buttonText = "To category",
    background = BgBannerMeat,
    path=null,
    margin = "0 0 0 0",
}) => {
    const isImage = useValidateImageUrl(background);

    const history = useHistory();

    const handleClick = () => {
        history.push(path);
    }

    return (
        <Wrapper background={background} margin={margin}>
            <Bg isBackground={isImage}>
                <Inner>
                    <TextBlock>
                        <SubTitle>{subTitle}</SubTitle>
                        <Title isBackground={isImage}>{title}</Title>
                    </TextBlock>
                    <Button
                        onClick={handleClick}
                        variant='filled'
                        size='md'
                        endIcon={<Arrowright />}
                    >
                        {buttonText}
                    </Button>
                </Inner>
            </Bg>
        </Wrapper>
    );
};

Banner.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([null]).isRequired,
    ]),
    buttonText: PropTypes.string,
    background: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([null]).isRequired,
    ]),
    margin: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([null]).isRequired,
    ]),
};


const Wrapper = styled.div`
    width: 100%;
    max-width: 390px;
    min-height: 180px;
    overflow-x: hidden;
    border-radius: 12px;
    background-color: #f4f8ec;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    ${(props) =>
        props.background ? `background-image: url(${props.background})` : null};

    margin: ${(props) => css_indent(props.margin)};

    @media ${device.mobileL} {
        min-height: 280px;
    }
`;

const Bg = styled.div`
    padding: 48px 32px 32px;
    ${(props) => {
        if (props.isBackground) {
            return `    
            background: rgba(21, 21, 21, 0.3);
            box-shadow: 0 80px 100px 0 rgba(21, 21, 21, 0.6) inset;
            transition: background 0.5s;
            &:hover {
                background: rgba(21, 21, 21, 0.6);
            }`;
        }
    }};
`;

const Inner = styled.div`
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media ${device.mobileL} {
        min-height: 200px;
    }
`;

const TextBlock = styled.div`
    min-height: 60px;
    display: flex;
    flex-direction: column;
    text-align: start;

    margin: 0 0 54px 0;

    @media ${device.mobileL} {
        margin: 0 0 94px 0;
    }
`;

const SubTitle = styled.h6`
    min-height: 18px;
    ${setFontStyle("h6")}
    color: ${colors.green};
`;

const Title = styled.h3`
    ${setFontStyle("h3")}
    ${(props) =>
        props.isBackground ? `color: #fff` : `color: ${colors.black}`}
`;