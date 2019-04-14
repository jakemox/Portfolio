import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { data } from '../../data/data.js';
import { Section, Container } from '../../styles/styles.js';

export default class Footer extends React.Component {
    render() {
        return (
           <ThemeProvider theme={footer}>
                <Section>
                   <Container>
                        <FooterContent>
                            <Footnote>Designed and made by Jake Moxon using React and Styled Components</Footnote>
                            <Social>
                                {data.social.map(
                                    (socialItem, i) =>
                                    <Link 
                                        key={i}
                                        index={i}
                                        alt={socialItem.name}
                                        href={socialItem.link}
                                        target="blank"
                                    >
                                        <SocialItem 
                                            src={socialItem.image}
                                        >
                                        </SocialItem>
                                    </Link>
                                )}
                            </Social>
                            <Copyright>© 2019 Jake Moxon</Copyright>
                        </FooterContent>
                   </Container>
                </Section>
           </ThemeProvider>
        )
    }
}

const footer = {
    background: `rgb(48, 133, 163)`,
    color: 'white',
    margin: '1rem'
};

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Social = styled.footer`
    /* width: 100vw; */
    margin: auto;
    display: flex;
    justify-content: center;
`;

const Link = styled.a``;

const SocialItem = styled.img`
    height: 30px;
    width: 30px;
    margin: 0.5rem 1.5rem;
`;

const Footnote = styled.p`
    color: white;
    font-family: 'Raleway';
    font-size: 0.7rem;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 0.85rem;
    }
    /* font-weight: 700; */
`;

const Copyright = styled.p`
    color: white;
    font-size: 0.6rem;
    font-weight: 300;

    @media (min-width: 768px) {
        font-size: 0.7rem;
    }
`;