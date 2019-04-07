import React from 'react';
import { data } from '../Data.js';
import PortfolioItem from './portfolio-item.jsx'
import styled, { ThemeProvider } from 'styled-components';
import { Section, Container, SectionTitle } from '../Styles.js';

export default class Portfolio extends React.Component {
    render() {
        return (
            <ThemeProvider theme={portfolio}>
                <Section>
                    <Container>
                        <SectionTitle>PORTFOLIO</SectionTitle>
                        <CaseStudies>
                            {data.portfolioItems.map(
                                (portfolioItem, i) =>
                                <PortfolioItem 
                                    key={i}
                                    index={i}
                                    title={portfolioItem.title}
                                    subtitle={portfolioItem.subtitle}
                                    image={portfolioItem.image}
                                    stack={portfolioItem.stack}
                                />
                            )}
                        </CaseStudies>
                    </Container>
                </Section>
            </ThemeProvider>
        )
    }
};

const portfolio = {
    background: `white`,
    color: 'black',
    margin: '1rem'
};

const CaseStudies = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;