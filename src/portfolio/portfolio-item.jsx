import React from 'react';
import styled from 'styled-components';
import { Button } from '../Styles.js';


const Item = styled.div`
    width: 80%;
    height: 450px;
    background: ${props => `
        linear-gradient(
            to right,
            rgba(0, 0, 0, 0.75), 
            rgba(15, 11, 91, 0.75)
        ),
        url(${props.image})`};
    background-position: center;
    background-size: cover;
    /* position: relative;
    left: ${props => props.index % 2 == 0 ? '0' : ''};
    right: ${props => props.index % 2 == 0 ? '' : '0'}; */
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PortfolioDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PortfolioTitle = styled.h3`
    font-family: 'Raleway';
    font-size: 3rem;
    /* position: relative; */
    color: white;
    text-shadow: 0 -1px 12px rgba(0, 0, 0, 0.5); 
    margin: 1rem 0;
    /* top: -2.25rem; */
    line-height: 3rem;
`;

const Description = styled.p`
    font-family: 'Halant';
    font-style: italic;
    color: white;
    font-size: 1.25rem;
`; 

export default class PortfolioItem extends React.Component {
    render() {
        console.log(this.props.index);
        return (
            <Item image={this.props.image} index={this.props.index}>
                <PortfolioDetails>
                    <PortfolioTitle>{this.props.title.toUpperCase()}</PortfolioTitle>
                    <Description>{this.props.subtitle}</Description>
                    <Button>CASE STUDY</Button>
                </PortfolioDetails>
            </Item>
        )
    }
}