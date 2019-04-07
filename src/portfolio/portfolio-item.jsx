import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button } from '../Styles.js';
import Fade from 'react-reveal/Fade';
import { Link } from '../Styles.js'
 
export default class PortfolioItem extends React.Component {
    
    buttonHover() {

    }
    
    render() {
        return (
            <Fade>
                <Item image={this.props.image} index={this.props.index}>
                    <PortfolioTitle>{this.props.title.toUpperCase()}</PortfolioTitle>
                    <PortfolioDetails index={this.props.index}>
                        <Stack>
                            {this.props.stack.map(
                                (stackItem, i) =>
                                <StackItem key={i}>{stackItem}</StackItem>
                            )}
                        </Stack>
                        <Description>{this.props.subtitle}</Description>
                        <Button><Link href="">VIEW PROJECT</Link></Button>
                    </PortfolioDetails>
                </Item>
            </Fade>
        )
    }
};

const Item = styled.div`
    /* width: 100%; */
    height: 450px;
    background: ${props => `
        linear-gradient(
            ${props.index % 2 === 0 ? 'to right' : 'to left'},
            rgba(0, 0, 0, 0.5), 
            rgba(15, 11, 91, 0.5)
        ),
        url(${props.image})`};
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: 2rem 0;

    @media (min-width: 768px) {
        margin: 2rem;
    }

    @media (min-width: 992px) {
        flex-direction: ${props => props.index % 2 === 0 ? 'row' : 'row-reverse'};
        justify-content: space-between;
        padding: 0.5rem;
    } 
`;

const PortfolioDetails = styled.div`
    width: 80%;
    height: 100%;
    /* background-color: white; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    @media (min-width: 992px) {
        width: 300px;
        height: 100%;
        background: white;
    } 
`;

const PortfolioTitle = styled.h3`
    font-family: 'Raleway';
    font-size: 2rem;
    position: absolute;
    top: calc(225px - 1rem);
    color: white;
    margin: 0;
    line-height: 2rem;
    text-align: center;

    @media (min-width: 480px) {
        font-size: 2.5rem;
        top: calc(225px - 1.25rem);
        line-height: 2.5rem;
    } 

    @media (min-width: 992px) {
        position: initial;
    } 
`;

const Description = styled.p`
    font-family: 'Halant';
    color: black;
    font-size: 1.25rem;
    line-height: 1.25rem;
    margin: 0;
    display: none;

    @media (min-width: 992px) {
        display: block;
    }
`; 

const Stack = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const StackItem = styled.div`
    color: #FFE5B4;
    font-family: 'Raleway';
    font-size: 0.8rem;
    margin: 0;
    font-weight: 700;
    width: 100px;
    text-align: center;

    @media (min-width: 992px) {
        background: none;
        color: #f29700;
        width: initial;
    }
`;