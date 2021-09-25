import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../helpers/colors';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 0 40px;
`;
const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 8px;
`;
const Head = styled.h4`
    font-family: "Poppins-SemiBold";
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: ${colors.black};
    margin: 0 0 8px;
`;

const List = styled.ul`
    text-align: left;
    display: flex;
    flex-direction: column;
`;

const Item = styled.li`
    font-family: "OpenSans-Regular";
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: ${colors.green};
    margin: 0 0 8px;
`;

const FooterMenu = () => {
    return (
        <Wrapper>
            <Column>
                <Head>Get in touch</Head>
                <List>
                    <Item>About Us</Item>
                    <Item>Careers</Item>
                    <Item>Press Releases</Item>
                    <Item>Blog</Item>
                </List>
            </Column>
            <Column>
                <Head>Get in touch</Head>
                <List>
                    <Item>About Us</Item>
                    <Item>Careers</Item>
                    <Item>Press Releases</Item>
                    <Item>Blog</Item>
                </List>
            </Column>
        </Wrapper>
    );
}

export default FooterMenu;
