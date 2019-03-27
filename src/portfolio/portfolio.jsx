import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Section } from '../Styles.jsx';

const portfolio = {
    background: `white`,
    height: '100vh',
    color: 'black',
    margin: '1rem'
};

export default class Portfolio extends React.Component {
    render() {
        return (
            <ThemeProvider theme={portfolio}>
                <Section>
                    Hello
                </Section>
            </ThemeProvider>
        )
    }
}