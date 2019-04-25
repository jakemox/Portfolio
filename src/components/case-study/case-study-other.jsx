import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Section, Container } from '../../styles/styles.js';

export default class CaseStudyOther extends React.Component {

    render() {
        return (
            <ThemeProvider theme={casestudyOther}>
                <Section>
                    <Container>
                        <Other>
                            <SubTitle>STACK</SubTitle>
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
                                <StackInfo>
                                    {this.props.stackInfo.map(
                                        (stackInfoItem, i) =>
                                        <StackInfoItem 
                                            key={i}
                                        >
                                        {stackInfoItem}
                                        </StackInfoItem>
                                    )}
                                </StackInfo>
                            {/* <SubTitle>BRANDING</SubTitle> */}
                        </Other>
                    </Container>
                </Section>
            </ThemeProvider>
        )
    }
}

const casestudyOther = {
    background: 'white',
    color: 'black',
    margin: '1rem'
};

const SubTitle = styled.h3`
    font-family: 'Raleway';
    font-size: 1.5rem;
    color: black;
    text-align: center;

    @media (min-width: 480px) {
        font-size: 2.5rem;
    } 

    @media (min-width: 992px) {
        
    } 
`;

const Other = styled.div`
    margin: 2rem auto;

    @media (min-width: 768px) {
        width: 60%;
        /* margin: 80px auto; */
    }
`;

const StackInfo = styled.ul`
    
`;

const StackInfoItem = styled.li`
    font-size: 0.8rem;
    text-align: justify;
   
    @media (min-width: 768px) {
        font-size: 1rem;
    }
`;

const Stack = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;

    @media (min-width: 480px) {
        /* margin: 2rem auto; */
    }
   
    @media (min-width: 768px) {
  
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