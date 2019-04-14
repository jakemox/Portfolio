import React from 'react';
import styled from 'styled-components';
import { enableBodyScroll } from 'body-scroll-lock';
import jake from '../../img/jake.jpg';
import { data } from '../../data/data.js';
import cross from '../../img/cross.svg';
import { SectionTitle } from '../../styles/styles.js';

export default class About extends React.Component {    
    constructor(props) {
        super(props);

        this.state = {
            scroll: window.scrollY
        }
    }
    
    hideAbout = () => {
        this.props.action({
            visible: false
        });
        enableBodyScroll();
    }
    
    render() {
        return (
            <AboutAll visible={this.props.visible && this.state.scroll === 0 ? true : false}>
                <Text>
                    <SectionTitle>ABOUT</SectionTitle>
                    <Description>
                        London based web developer with over a year of experience, I am currently working at Luxus Worldwide. Combining my analytical and creative skills, I write clean, tested Object Orientated code to produce responsive, sustainable web apps. I love honing my technical skills by working on personal projects and keeping up with the latest technology and attending meetups. I also enjoy sports, travel and photography. Please feel free to connect via <Link href="https://www.linkedin.com/in/jakemox/">linkedIn</Link> or <Link href="https://github.com/jakemox">GitHub</Link>.
                    </Description>
                    <Stack>
                        {data.stack.map(
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
                </Text>
                <Picture>
                    <CrossBackground>
                        <Cross onClick={this.hideAbout} src={cross}></Cross>
                    </CrossBackground>
                </Picture>
            </AboutAll>
        )
    }
}

const AboutAll = styled.div`
    width: 100vw;
    height: ${props => props.visible === false ? '200vh' : '100vh'};
    display: flex;
    visibility: ${props => props.visible === false ? 'hidden' : 'visible'};
    flex-direction: column-reverse;
    justify-content: space-between;
    position: fixed;
    top: ${props => props.visible === false ? '-50vh' : '0'};
    left: 0;
    background-color: ${props => props.visible === false ? 'none' : 'white'};
    z-index: ${props => props.visible === false ? '-1' : '2'};
    transition: 0.5s;

    @media (min-width: 768px) {
        width: ${props => props.visible === false ? '200vw' : '100vw'};;
        height: 100vh;
        flex-direction: row;
        top: 0;
        left: ${props => props.visible === false ? '-50vw' : '0'};
    }
`;

const Text = styled.div`
    width: 100%;
    height: 50vh;
    padding: 0 2rem;
    margin-bottom: ${props => props.visible === false ? '50vh' : '0'};
    transition: 0.5s;

    @media (min-width: 768px) {
        width: 50vw;
        height: 100%;
        margin-right: ${props => props.visible === false ? '50vw' : '0'};
    }
`;

const Description = styled.p`
    text-align: justify;
    font-size: 0.6rem;

    @media (min-width: 480px) {
        font-size: 0.8rem;
    }

    @media (min-width: 768px) {
        font-size: 1rem;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: rgb(48, 133, 163);
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

const Picture = styled.div`
    width: 100%;
    height: 50vh;
    background: url(${jake});
    background-size: cover;
    background-position: top;
    position: relative;
    margin-top: ${props => props.visible === false ? '50vw' : '0'};
    transition: 0.5s;


    @media (min-width: 768px) {
        width: 50vw;
        height: 100%;
        background-position: center;
        margin-left: ${props => props.visible === false ? '50vw' : '0'};
    }
`;

const CrossBackground = styled.div`
    padding: 1rem;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(48, 133, 163, 1);
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        width: 60px;
        height: 60px;
    }
`;

const Cross = styled.img`
    height: 20px;
    transition: 0.2s;
    cursor: pointer;

    @media (min-width: 768px) {
        height: 30px;
        cursor: pointer;

        :hover {
            height: 35px;
        }
    }
`;