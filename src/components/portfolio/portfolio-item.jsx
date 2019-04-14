import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
 
export default class PortfolioItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hovered: false,
        }

        this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
        this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
    }

    mouseEnterHandler() {
        if (this.state.hovered === false) {
            this.setState({
                hovered: true,
            });
        }
    }

    mouseLeaveHandler() {
        if (this.state.hovered === true) {
            this.setState({
                hovered: false,
            });
        }
    }

    render() {
        return (
            <Fade>
                <Item 
                    onMouseEnter={this.mouseEnterHandler}
                    onMouseLeave={this.mouseLeaveHandler}
                    image={this.props.image}
                    index={this.props.index}
                    hovered={this.state.hovered}
                >
                    <Stack hovered={this.state.hovered}>
                        {this.props.stack.map(
                            (stackItem, i) =>
                            <StackItem key={i} index={i}>{stackItem.name}</StackItem>
                        )}
                    </Stack>
                    <PortfolioGeneral hovered={this.state.hovered} index={this.props.index}>
                        <PortfolioDetails hovered={this.state.hovered} index={this.props.index}>
                            <PortfolioTitle hovered={this.state.hovered} index={this.props.index}>{this.props.title.toUpperCase()}</PortfolioTitle>
                            <Description hovered={this.state.hovered} index={this.props.index}>{this.props.subtitle}</Description>
                        </PortfolioDetails>
                        <ButtonContainer hovered={this.state.hovered} index={this.props.index}>
                            <Button 
                                target="blank"
                                hovered={this.state.hovered}
                                // href={`/casestudy/${this.props.name}`}
                                // onClick={this.action}
                            >
                                <Link
                                    to={`/${this.props.name}`}
                                >VIEW PROJECT</Link>
                            </Button>
                        </ButtonContainer>
                    </PortfolioGeneral>
                </Item>
            </Fade>
        )
    }
};

const Item = styled.div`
    height: 450px;
    background: ${props => `
        linear-gradient(
            ${props.index % 2 === 0 ? 'to right' : 'to left'},
            ${props.hovered === false ? 
                'rgba(0,0,0,0.5), rgba(255,255,255,0.3)' : 
                'rgba(48,133,163,0.5), rgba(0, 0, 0, 0.5)'
            }
        ),
        url(${props.image})`};
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    margin: 2rem 0;
    overflow: hidden;
    transition: 0.5s;

    ::before {
        content: '';
        height: 450px;
        width: 868px;
        position: absolute;
        top: 0;
        left: ${props => props.index % 2 === 0 ? (props.hovered === false ? '-868px' : '868px') : (props.hovered === false ? '868px' : '-868px')};
        background-color: white;
        opacity: 0.5;
        transition: 0.5s;
    }

    @media (min-width: 768px) {
        margin: 2rem;
    }

    @media (min-width: 992px) {
        width: 868px;
        align-items: center;
        display: block;
        padding: 4rem 0;
        margin: 2rem auto;
    } 

    @media (min-width: 1200px) {
        margin: ${props => props.index % 2 === 0 ? '2rem auto 2rem 4rem' : '2rem 4rem 2rem auto'};
    }
`;

const PortfolioGeneral = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 992px) {
        flex-direction: ${props => props.index % 2 === 0 ? 'row' : 'row-reverse'};
        justify-content: center;
        align-items: center;
        width: fit-content;
        height: 306px;
        position: absolute;
        ${props => props.index % 2 === 0 ? 'left: 0;' : 'right: 0;'};
        transition: 0.5s;
    } 
`;

const PortfolioDetails = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem 1rem;
    position: relative;

    @media (min-width: 992px) {
        width: ${props => props.hovered === false ? '868px' : '651px'};
        height: 100%;
        padding: 0 1rem;
        display: block;
        text-align: ${props => props.index % 2 === 0 ? 'left' : 'right'};
        transition: 0.5s;
        ${props => props.hovered === false ? 'transition-delay: 0.3s' : ''};
    }
`;

const PortfolioTitle = styled.h3`
    font-family: 'Raleway';
    font-size: 1.5rem;
    position: relative;
    top: 176px;
    color: white;
    margin: 0;
    line-height: 1.5rem;
    text-align: center;
    white-space: nowrap;

    @media (min-width: 480px) {
        font-size: 2.5rem;
        top: 166px;
        line-height: 2.5rem;
    } 

    @media (min-width: 992px) {
        position: initial;
        margin-top: calc(153px - 1.25rem);
        transition: 1s;
        margin: 127px 0 0 0;
        text-align: ${props => props.index % 2 === 0 ? 'left' : 'right'};
        width: ${props => props.index % 2 === 0 ? (props.hovered === false ? '100%' : '0') : '100%'};
    } 
`;

const Description = styled.p`
    font-family: 'Merriweather';
    font-weight: 300;
    color: #FFE5B4;
    font-size: 0.9rem;
    margin-top: 0.5rem;
    display: none;
    width: initial;

    @media (min-width: 992px) {
        display: block;
        opacity: ${props => props.hovered === false ? '0' : '1'};
        transition: 0.3s;
        ${props => props.hovered === true ? 'transition-delay: 0.5s' : ''};
        width: 100%;
    }
`; 

const ButtonContainer = styled.div`
    @media (min-width: 992px) {
        width: 217px;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-left: ${props => props.index % 2 === 0 ? '2px solid white' : 'none'};
        border-right: ${props => props.index % 2 === 0 ? 'none' : '2px solid white'};
        transition: 0.5s;
    } 
`;

const Button = styled.button`
    font-family: 'Raleway';
    color: white;
    background: none;
    border: solid 2px white;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1rem;
    height: calc(2.5rem - 4px);
    text-decoration: none;
    text-align: center;
    margin: 2rem;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        background: rgba(48,133,163,0.5);
        color: white;
    }

    @media (min-width: 480px) {
        width: 180px;
        margin: 2rem auto;
    } 

    @media (min-width: 992px) {
        margin: 2rem;
        overflow: hidden;
    } 
`;

const Stack = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    width: 100%;
    position: absolute;
    top: 1rem;
    padding: 0 0.5rem;

    @media (min-width: 992px) {
        padding: 0 2rem;
        opacity: ${props => props.hovered === false ? '0' : '1'};
        transition: 0.3s;
        ${props => props.hovered === true ? 'transition-delay: 0.5s' : ''};
    }
`;

const StackItem = styled.div`
    color: #FFE5B4;
    font-family: 'Raleway';
    font-size: 0.7rem;
    margin: 0;
    font-weight: 700;
    text-align: center;
    ${props => props.index > 2 ? 'display: none;' : ''};

    @media (min-width: 992px) {
        font-size: 0.8rem;
        background: none;
        width: initial;
        display: block;
    }
`;