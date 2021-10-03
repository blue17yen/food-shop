import React from 'react';
import styled from 'styled-components';

import { Container } from '../Container/Container';
import FooterMenu from './Inner/FooterMenu';
import ProductTags from './Inner/ProductTags';

const FooterWrap = styled.footer`
    flex: 0 0 auto;
`
const FooterInner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 0px;
`

const Footer = () => {
    return (
        <FooterWrap>
            <Container>
                <FooterInner>
                    <FooterMenu />
                    <ProductTags />
                </FooterInner>
            </Container>
        </FooterWrap>
    );
}

export default Footer;
