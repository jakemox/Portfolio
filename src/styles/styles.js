import styled from 'styled-components';

export const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;

    @media (min-width: 768px) {
        width: 750px;
    }
  
    @media (min-width: 992px) {
        width: 970px;
    }
  
    @media (min-width: 1200px) {
        width: 1170px;
    }
`;

export const Section = styled.section`
    background: ${props => (props.theme.background)};
    color: ${props => props.theme.color};
    height: ${props => (props.theme.height)};
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 992px) {
        background-attachment: fixed;
    }
`;

export const SectionTitle = styled.h2`
    font-family: 'Raleway';
    text-align: center;
    font-size: 1.5rem;

    @media (min-width: 480px) {
        font-size: 2rem;
    }

    @media (min-width: 768px) {
        font-size: 3rem;
    }
`;

