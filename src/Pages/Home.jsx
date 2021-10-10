import React from 'react';
import styled from 'styled-components';

import { device } from 'helpers/';

import { Container } from 'components/Container/Container';
import { Banner } from 'components/blocks/Card/Banner';


export const Home = ({ content }) => {
    return (
        <Wrapper>
            <Container>
                <Inner>
                    {content.map((el) => (
                        <Banner key={el.path} title={el.title} background={el.background} path={el.path}/>
                    ))}
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
