import React from 'react';
import styled from 'styled-components';
import { Button } from '../Styles.js';
import Fade from 'react-reveal/Fade';

const Item = styled.div`
    /* width: 100%; */
    height: 450px;
    margin: 2rem;
    display: flex;
    flex-direction: ${props => props.index % 2 === 0 ? 'row' : 'row-reverse'};
    /* opacity: 0; */
`;

const Image = styled.div`
    width: 100%;
    height: 100%;
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
    flex-direction: ${props => props.index % 2 === 0 ? 'row' : 'row-reverse'};
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
`;

const PortfolioDetails = styled.div`
    width: 35%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
`;

const PortfolioTitle = styled.h3`
    font-family: 'Raleway';
    font-size: 2.5rem;
    /* position: relative; */
    color: white;
    margin: 0;
    /* top: -2.25rem; */
    line-height: 2.5rem;
`;

const Description = styled.p`
    font-family: 'Halant';
    /* font-style: italic; */
    color: black;
    font-size: 1.25rem;
    line-height: 1.25rem;
    margin: 0;
    /* text-align: justify; */
`; 

const Stack = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const StackItem = styled.div`
    color: rgb(62, 62, 62);
    font-family: 'Raleway';
    font-size: 0.8rem;
    margin: 0;
    font-weight: 700;
`;

export default class PortfolioItem extends React.Component {
    
    render() {
        console.log(this);
        return (
          <Fade>
                <Item index={this.props.index}>
                    <Image image={this.props.image} index={this.props.index}>
                        <PortfolioTitle>{this.props.title.toUpperCase()}</PortfolioTitle>
                        <PortfolioDetails index={this.props.index}>
                            <Stack>
                                {this.props.stack.map(
                                    (stackItem, i) =>
                                    <StackItem key={i}>{stackItem}</StackItem>
                                )}
                            </Stack>
                            <Description>{this.props.subtitle}</Description>
                            <Button>VIEW PROJECT</Button>
                        </PortfolioDetails>
                    </Image>
                </Item>
          </Fade>
        )
    }
}