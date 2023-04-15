import styled from "styled-components";

export const MenuItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    min-width: 30em;
    height: 100%;
    border: 1px solid black;
    background-color: #eaeaea;
    margin: 0.5em;
    padding: 1em 0.5em;
    border-radius: 0.5em;
    box-shadow: 0 0 0.6em 0.1em rgba(0, 0, 0, 0.2);
`;

export const MenuItemImage = styled.img`
    width: 30%;
    height: 30%;
    object-fit: cover;
    border-radius: 0.5em;
    border: 1px solid grey;
    margin: 0 0 0 1em;
`;

export const MenuItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 70%;
    height: 100%;
    margin: 0 0 0 2em;
    padding: 0;
`;

export const MenuItemTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    gap: 0.5em;

    p {
        font-size: 1.7em;
        font-weight: 700;
        margin: 0;
        padding: 0 0 0.1em 0;
    }
`;

export const MenuItemMeta = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 100%;
    margin: 0;
    padding: 0;
    gap: 0.5em;
`;