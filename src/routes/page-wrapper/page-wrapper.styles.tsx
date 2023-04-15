import styled from "styled-components";

export const OutletContainer = styled.div`
    padding: 2em 0 0 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        padding: 4em 0 0 0;
    }

    @media screen and (min-width: 1024px) {
        padding: 4.6em 0 0 0;
    }

    @media screen and (min-width: 1440px) {
        padding: 5.4em 0 0 0;
    }
`;