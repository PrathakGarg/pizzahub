import styled from "styled-components";

export const AddToCartButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    min-width: 6em;
    height: 100%;
    padding: 0.5em 0.5em;
    border: 0em solid black;
    background-color: #00b89411;
    border-radius: 0.4em;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #00b89422;
    }
`;

export const AddToCartButtonLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    padding: 0.5em 0.5em;
    // border: 0.1px solid black;
    border-right: 1px solid #00000055;
    background-color: #00b894;
    border-radius: 0.1em 0 0 0.1em;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #fff;
    font-weight: 700;
    
    &:hover {
        background-color: #00b894cc;
    }
`;

export const AddToCartButtonRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 100%;
    padding: 0.5em 0.5em;
    // border: 0.1px solid black;
    background-color: #00b894;
    border-radius: 0 0.1em 0.1em 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #fff;
    font-weight: 700;

    &:hover {
        background-color: #00b894cc;
    }
`;