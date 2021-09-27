import React from "react";
import styled from "styled-components";
import { colors } from "../../../helpers/colors";
import { Button } from "./../Button/Button";
import { cssMP_Helper } from './../../../helpers/margin';
import { device } from "../../../helpers/device";

const Wrapper = styled.div`
    width: 100%;
    max-width: 390px;
    min-height: 180px;
    border-radius: 12px;
    background: ${(props) => props.background};
    padding: 48px 32px 32px;
    overflow-x: hidden;

    margin: ${(props) => cssMP_Helper(props.margin)};

    @media ${device.mobileL} {
        min-height: 280px;
    }
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

const SubTitle = styled.div`
    font-family: "Poppins-SemiBold";
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.green};
`;

const Title = styled.div`
    font-family: "Poppins-SemiBold";
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: ${colors.black};
`;

export const Banner = ({
    title = "Title",
    subTitle = "SubTitle",
    buttonText = "Button",
    background = "#f4f8ec",
    margin = '0 0 0 0'
}) => {
    return (
        <Wrapper background={background} margin={margin}>
            <Inner>
                <TextBlock>
                    <SubTitle>{subTitle}</SubTitle>
                    <Title>{title}</Title>
                </TextBlock>
                <Button variant='filled' size='md' endArrow>
                    {buttonText}
                </Button>
            </Inner>
        </Wrapper>
    );
};
