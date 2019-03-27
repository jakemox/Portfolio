import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import montreal from '../img/montreal.jpg';
import logo from '../img/logo.svg';
import burger from '../img/burger.svg';
import cross from '../img/cross.svg';
import { Section } from '../Styles.jsx';

const header = {
    background: `url(${montreal})`,
    height: '100vh',
    color: 'white',
};

const NavBar = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.5rem 1rem;
    font-weight: 200;
    height: ${props => props.navExpanded === false ? '60px' : 'initial'};
    background: rgba(0, 0, 0, 0.75);

    @media (min-width: 768px) {
        height: ${props =>  (props.navSize * 120)}px;
        background: ${props => props.navSize > 0.5 ? `linear-gradient( to bottom, rgba(0, 0, 0, ${props.navSize / 2}), rgba(0, 0, 0, ${1 - props.navSize}) )` : `rgba(0, 0, 0, ${1 - (props.navSize / 2)})`};
        align-items: flex-start;
    }
`;

const Burger = styled.button`
    color: white;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    position: relative;
    height: 30px;
    width: 30px;
    :focus {
        outline: 0;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

const BurgerIcon = styled.img`
    backface-visibility: hidden;
    height: 30px;
    transform: ${props => props.visible === false ? 'perspective(800px) rotateX(180deg)' : 'perspective(800px) rotateX(0deg)'};
    transition: 0.5s;
    position: absolute;
    top: 0;
    left: 0;
`;

const CrossIcon = styled.img`
    backface-visibility: hidden;
    height: 30px;
    transform: ${props => props.visible === false ? 'perspective(800px) rotateX(180deg)' : 'perspective(800px) rotateX(0deg)'};
    transition: 0.5s;
    position: absolute;
    top: 0;
    left: 0;

`;

const NavLink = styled.a`
    text-decoration: none;
    color: white;
    margin: 0 1rem 0 0;

    @media (min-width: 768px) {
        margin: 0 1rem;
    }
`;

const NavItems = styled.div`
    line-height: 45px;
    height: ${props => props.navExpanded === false ? '0px' : 'calc(50vh - 60px)'};
    /* opacity: ${props => props.navExpanded === false ? '0' : '1'}; */
    /* visibility: ${props => props.navExpanded === false ? 'hidden' : 'visible'}; */
    overflow: hidden;
    display: flex;
    flex-flow: column;
    flex-basis: 100%;
    flex-grow: 1;
    justify-content: space-around;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    margin: 0 1rem 0 0;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        flex-basis: auto;
        justify-content: flex-end;
        height: initial;
    }
`;

const LogoLink = styled.a`
    color: white;
    margin: 0;
    height: 42px;

    @media (min-width: 768px) {
        height: ${props => `calc(${props.navSize * 120}px - 1rem)`};
    }
`

const Logo = styled.img`
    height: calc(60px - 1rem);
    
    @media (min-width: 768px) {
        height: ${props => `calc(${props.navSize * 120}px - 1rem)`};
    }
`;

const HeroTitle = styled.div`
    text-align: center;
`;

const Name = styled.h1`
    font-size: 2rem;
    font-weight: 400;
    margin: 1rem;
    color: white;

    @media (min-width: 768px) {
        font-size: 3rem;
    }
`;

const Job = styled.h2`
    font-size: 1.5rem;
    font-weight: 200;
    color: white;

    @media (min-width: 768px) {
        font-size: 2rem;
    }
`;



export default class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navSize: 1,
            navExpanded: false,
            burgerIcon: true,
            crossIcon: false
        }

        this.navExpand = this.navExpand.bind(this);
    }
    
    componentDidMount() {
        document.addEventListener('scroll', () => {
            if (window.scrollY < 60) {
                this.setState({
                    navSize: (120 - window.scrollY) / 120,
                })
            } else {
                this.setState({
                    navSize: 0.5,
                })
            }
        });
    }

    navExpand() {
        if (this.state.navExpanded === false) {
            this.setState({
                navExpanded: true,
                burgerIcon: false,
                crossIcon: true
            })
        } else {
            this.setState({
                navExpanded: false,
                burgerIcon: true,
                crossIcon: false
            })
        }
    }
    
    render() {
        return (
            <ThemeProvider theme={header}>
                <Section>
                    <NavBar navSize={this.state.navSize}>
                        <LogoLink navSize={this.state.navSize} href="/">
                            <Logo navSize={this.state.navSize} src={logo} alt="Logo"></Logo>
                        </LogoLink>
                        <Burger onClick={this.navExpand}>
                            <BurgerIcon visible={this.state.burgerIcon} src={burger}></BurgerIcon>
                            <CrossIcon visible={this.state.crossIcon} src={cross}></CrossIcon>
                        </Burger>
                        <NavItems navExpanded={this.state.navExpanded}>
                            <NavLink href="#folio">Portfolio</NavLink>
                            <NavLink href="#skills">Skills</NavLink>
                            <NavLink href="#info">About Me</NavLink>
                            <NavLink href="/graphics.pdf" target="blank">Graphics</NavLink>
                            {/* <a href="#contactme">Contact</a> */}
                        </NavItems>
                    </NavBar>
                    <HeroTitle>
                        <Name>Jake Moxon</Name>
                        <Job>Web Developer</Job>
                    </HeroTitle>
                </Section>
            </ThemeProvider>
        )
    }
}