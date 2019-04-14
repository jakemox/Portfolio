import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Section, Container, SectionTitle } from '../../styles/styles.js';


export default class CaseStudyInfo extends React.Component {
    render() {
        return (
            <ThemeProvider theme={casestudy}>
                <Section>
                    <Container>
                        <Info>
                            <Lead>
                                <SectionTitle>THE PROJECT</SectionTitle>
                                <Description>{this.props.description}</Description>
                            </Lead>
                            <OtherInfo>
                                <Stack>
                                    {this.props.stack.map(
                                        (stackItem, i) =>
                                        <StackItem 
                                            key={i}
                                            index={i}
                                            name={stackItem.name}
                                        >
                                            <StackImage src={stackItem.image}/>
                                            <StackName>{stackItem.name}</StackName>
                                        </StackItem>
                                    )}
                                </Stack>
                            </OtherInfo>
                        </Info>
                    </Container>
                </Section>
            </ThemeProvider>
            
        )
    }
}

const casestudy = {
    background: 'white',
    color: 'black',
    margin: '1rem'
};

const Info = styled.div`
    /* display: flex; */
    margin: 80px auto;
`;

const Lead = styled.div``;

const Description = styled.p`
    width: 60%;
    text-align: justify;
    margin: auto;
`;

const OtherInfo = styled.div`
    width: 50%;
`;

const Stack = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;

    @media (min-width: 480px) {
        margin: 2rem 0;
    }
   
    @media (min-width: 768px) {
        margin: 5rem 0;
    }
`;

const StackItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StackName = styled.p`
    text-align: center;
    color: rgb(100, 100, 100);
    font-family: 'Raleway';
    font-size: 0.6rem;
    font-weight: 700;

    @media (min-width: 480px) {
        font-size: 0.7rem;
    }
`;

const StackImage = styled.img`
    height: 50px;
    width: 50px;
    margin-bottom: 0.5rem;
    filter: grayscale(100%);
    display: none;

    :hover {
        filter: grayscale(0%);
    }

    @media (min-width: 480px) {
        display: block;
    }
  
    @media (min-width: 992px) {
        height: 60px;
        width: 60px;
    }
`;
