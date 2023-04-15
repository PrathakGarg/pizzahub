import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    background-color: #000;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
`;

export const FooterLink = styled.a`
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: #f5f5f5;
    }
`;

export const FooterText = styled.p`
    margin: 0;
`;