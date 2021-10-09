import React from 'react';
import styled from 'styled-components';

import { device } from 'helpers/';

import { Container } from 'components/Container/Container';
import { Banner } from 'components/blocks/Card/Banner';

import BgBannerEgg from 'assets/images/bg-banner-egg.png'
import BgBannerMeat from 'assets/images/bg-banner-meat.png'


export const Home = () => {
    return (
        <Wrapper>
            <Container>
                <Inner>
                    <Banner
                        title={"Fresh vegetables and fruits"}
                        subTitle='Vegetables and fruits'
                        background={BgBannerEgg}
                    />
                    <Banner
                        title={"Fresh vegetables and fruits"}
                        background={BgBannerEgg}
                        subTitle={null}
                    />
                    <Banner title={"Fresh meat"} background={BgBannerMeat} />
                    <Banner
                        title={"Fresh vegetables and fruits"}
                        background={BgBannerEgg}
                    />
                    <Banner title={"Fresh meat"} background={BgBannerMeat} />
                    <Banner
                        title={"Fresh vegetables and fruits"}
                        background={BgBannerEgg}
                    />
                    <Banner title={"Fresh meat"} background={BgBannerMeat} />
                    <Banner
                        title={"Fresh vegetables and fruits"}
                        background={BgBannerEgg}
                    />
                    <Banner title={"Fresh meat"} background={BgBannerMeat} />
                </Inner>
            </Container>
        </Wrapper>
    );
}


const Wrapper = styled.main`
    padding: 30px 0 40px;
`;
const Inner = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;

    @media ${device.mobileL} {
        row-gap: 30px;
    }
    @media ${device.laptopS} {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 30px;
        row-gap: 30px;
    }
`;
