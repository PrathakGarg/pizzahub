import styled from "styled-components";

import PizzaHeader from "../../assets/header_pasta_pizza.jpg";

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem 0 0 0;
    width: 100%;
    height: 100%;
`

export const HomeBanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30vh;
    background-image: url("${PizzaHeader}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
    color: #fff;
    text-shadow: 0 0 0.5em 0.1em rgba(0, 0, 0, 0.2);
`