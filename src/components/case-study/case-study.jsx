import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Section, Container, SectionTitle } from '../../styles/styles.js';

export default class CaseStudyInfo extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <ThemeProvider theme={casestudyLead(this.props.color)}>
                <Section>
                    <Container>
                        <Lead>
                            <SectionTitle>THE PROJECT</SectionTitle>
                            <Description>{this.props.description}</Description>
                            <Button target="blank" href={this.props.link}>VIEW PROJECT</Button>
                            {/* <Jobs></Jobs> */}
                        </Lead>
                    </Container>
                </Section>
            </ThemeProvider>
        )
    }
}

const casestudyLead = (color) => ({
    background: color,
    color: 'white',
    margin: '1rem'
});

const Lead = styled.div`
    
    margin: 80px auto;
    
    @media (min-width: 768px) {
        width: 60%;
    }
`;

const Description = styled.p`
    text-align: justify;
    margin: auto;
    font-size: 0.9rem;

    @media (min-width: 768px) {
        font-size: 1rem;
    }    
`;

const Button = styled.a`
    font-family: 'Raleway';
    height: 80%;
    width: 80%;
    color: white;
    background: none;
    border: solid 2px white;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1rem;
    height: calc(2.5rem - 4px);
    text-decoration: none;
    text-align: center;
    margin: 2rem auto;
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
    } 

    @media (min-width: 992px) {
        overflow: hidden;
    } 
`;

const Jobs = styled.div``;



