import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { disableBodyScroll } from 'body-scroll-lock';
import montreal from '../../img/montreal.jpg';
import logo from '../../img/logo.svg';
import burger from '../../img/burger.svg';
import cross from '../../img/cross.svg';
import arrow from '../../img/down-arrow.svg';

export default class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navSize: 1,
            navExpanded: false,
            // page: this.props.page
        }

        this.navExpand = this.navExpand.bind(this);
        this._handleScroll = this._handleScroll.bind(this);
    }

    componentDidMount() {
        window.onscroll = () => this._handleScroll()
    }

    _handleScroll() {
        if (window.scrollY < 60) {
            this.setState({
                navSize: (120 - window.scrollY) / 120,
            })
        } else {
            this.setState({
                navSize: 0.5,
            })
        }
    }

    navExpand() {
        if (this.state.navExpanded === false) {
            this.setState({
                navExpanded: true,
            })
        } else {
            this.setState({
                navExpanded: false,
            })
        }
    }

    aboutVisible = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.props.action({
            visible: true
        });
        disableBodyScroll();
    }
    
    scrollToPortfolio() {
        // let windowHeight = window.innerHeight - 60
        window.scrollTo({ top: window.innerHeight - 60, behavior: 'smooth' });
    }

    render() {
        return (
            <>
                <Section 
                    image={this.props.page === 'home' ? montreal : this.props.image}
                    size={this.props.page === 'home' ? 'big' : 'small'}
                >
                    <NavBar navSize={this.state.navSize}>
                        <LogoLink navSize={this.state.navSize} to="/">
                            <Logo navSize={this.state.navSize} src={logo} alt="Logo"></Logo>
                        </LogoLink>
                        <Burger onClick={this.navExpand}>
                            <BurgerIcon visible={this.state.navExpanded} src={burger}></BurgerIcon>
                            <CrossIcon visible={this.state.navExpanded} src={cross}></CrossIcon>
                        </Burger>
                        {this.props.page === 'home' ? 
                            <NavItems navExpanded={this.state.navExpanded}>    
                                <NavList>
                                    <NavLink onClick={this.scrollToPortfolio}>PORTFOLIO</NavLink>
                                </NavList>
                                <NavList>
                                    <NavLink onClick={this.aboutVisible}>ABOUT</NavLink>
                                </NavList>
                                </NavItems>
                        :
                            <NavItems navExpanded={this.state.navExpanded}>    
                                <NavList>
                                    <HomeLink to="/">RETURN HOME</HomeLink>
                                </NavList>
                            </NavItems>
                        }
                    </NavBar>
                    <HeroTitle>
                        <Title size={this.props.page === 'home' ? 'big' : 'small'}>
                            {this.props.page === 'home' ? `JAKE ${String.fromCharCode(160)}MOXON` : this.props.title.toUpperCase()}
                        </Title>
                        <Job
                            size={this.props.page === 'home' ? 'big' : 'small'}>{this.props.page === 'home' ? `Web Developer` : this.props.subtitle}
                        </Job>
                    </HeroTitle>
                    <Arrow src={arrow} alt="Arrow" onClick={this.scrollToPortfolio}></Arrow>
                </Section>
            </>
        )
    }
};

const Section = styled.section`
    background: ${props => `
        linear-gradient(
            to bottom,
            ${props.size === 'small' ? 
                'rgba(0,0,0,0.5), rgba(0,0,0,0.5)' : 
                'rgba(48,133,163,0), rgba(0, 0, 0, 0)'
            }
        ),
        url(${props.image})`};
    height: ${props => props.size === 'big' ? '100vh' : 'calc(100vh - 60px)'};
    color: white;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (min-width: 992px) {
        background-attachment: fixed;
    }
`;

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
    background: ${window.scrollY < window.innerHeight ? (`rgba(48, 133, 163, 0.75)`) :  `rgba(48, 133, 163, 1)`};
    z-index: 1;

    @media (min-width: 768px) {
        height: ${props =>  (props.navSize * 120)}px;
        background: ${props => props.navSize > 0.5 ? `linear-gradient( to bottom, rgba(48, 133, 163, ${props.navSize / 2}), rgba(48, 133, 163, ${1 - props.navSize}) )` : window.scrollY < window.innerHeight ? (`rgba(48, 133, 163, ${1 - (props.navSize / 2)})`) :  `rgba(48, 133, 163, 1)`};
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
    transform: ${props => props.visible === true ? 'perspective(800px) rotateX(180deg)' : 'perspective(800px) rotateX(0deg)'};
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
    transition: 0.5s;
`;

const NavList = styled.li`
    line-height: initial;
`;

const NavLink = styled.a`
    text-decoration: none;
    color: #FFE5B4;
    margin: 0 1rem 0 0;
    font-family: 'Raleway';
    letter-spacing: 2px;
    font-weight: 600;
    font-size: 0.75rem;
    cursor: pointer;

    @media (min-width: 768px) {
        margin: 0 0.75rem;
    }
`;

const HomeLink = styled(Link)`
    text-decoration: none;
    color: #FFE5B4;
    margin: 0 1rem 0 0;
    font-family: 'Raleway';
    letter-spacing: 2px;
    font-weight: 600;
    font-size: 0.75rem;
    cursor: pointer;

    @media (min-width: 768px) {
        margin: 0 0.75rem;
    }
`;

const NavItems = styled.ul`
    line-height: 45px;
    height: ${props => props.navExpanded === false ? '0px' : '100px'};
    overflow: hidden;
    display: flex;
    flex-flow: column;
    flex-basis: 100%;
    flex-grow: 1;
    justify-content: space-around;
    transition: 0.5s;
    margin: 0;
    padding: 0;
    list-style-type: none;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        flex-basis: auto;
        justify-content: flex-end;
        height: 42px;
        align-items: center;
    }
`;

const LogoLink = styled(Link)`
    margin: 0;
    height: 42px;

    @media (min-width: 768px) {
        height: ${props => `calc(${props.navSize * 120}px - 1rem)`};
    }
`;

const Logo = styled.img`
    height: calc(60px - 1rem);
    
    @media (min-width: 768px) {
        height: ${props => `calc(${props.navSize * 120}px - 1rem)`};
    }
`;

const HeroTitle = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    font-family: 'Raleway';
    font-size: ${props => props.size === 'big' ? '2rem' : '1.5rem'};
    font-weight: 900;
    margin: 1rem;
    color: white;
    letter-spacing: 0.5px;

    @media (min-width: 480px) {
        font-size: 2rem;
    }

    @media (min-width: 768px) {
        font-size: 3.5rem;
    }
`;

const Job = styled.h2`
    font-family: 'Merriweather';
    font-size: ${props => props.size === 'big' ? '1.5rem' : '0.8rem'};
    font-weight: 200;
    color: white;
    margin: 0;
    max-width: 90%;
    margin: auto;

    @media (min-width: 480px) {
        font-size: ${props => props.size === 'big' ? '1.5rem' : '1rem'};
    }

    @media (min-width: 768px) {
        font-size: ${props => props.size === 'big' ? '2rem' : '1rem'};
    }
`;

const Arrow = styled.img`
    width: 30px;
    position: absolute;
    bottom: 100px;
    left: calc(50vw - 15px);
    cursor: pointer;
    animation: mover 1s infinite  alternate;
    @keyframes mover {
        0% { transform: translateY(0); }
        100% { transform: translateY(-10px); }
    }

    @media (min-width: 768px) {
        width: 50px;
        bottom: 65px;
        left: calc(50vw - 25px);
    }
`;



