import React from 'react';
import styled from 'styled-components';

import { colors } from 'helpers/';


export const FooterMenu = () => {
    return (
        <Wrapper>
            <Column>
                <Head>Author</Head>
                <List>
                    <Item>
                        <a
                            href={"https://github.com/blue17yen"}
                            target='_blank'
                        >
                            GitHub
                        </a>
                    </Item>
                </List>
            </Column>
            <Column>
                <Head>Food API</Head>
                <List>
                    <Item>
                        <a
                            href={"https://spoonacular.com/food-api"}
                            target='_blank'
                        >
                            Spoonacular
                        </a>
                    </Item>
                </List>
            </Column>
        </Wrapper>
    );
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    column-gap: 40px;
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

