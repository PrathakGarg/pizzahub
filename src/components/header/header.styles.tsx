import styled from 'styled-components';

// Header for pizza hub website with just a title styled and cart icon
export const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #c80f2e;
    // background-color: #000;
    padding: 0.001em 1rem;
    margin: 0;
    z-index: 100;

    h1 {
        margin: 0;
        padding: 0.5rem 2em 0.5rem 0;
        font-size: 1.5rem;
        font-weight: 300;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-align: center;
        color: #fff;
        cursor: pointer;
    }

    

    @media screen and (min-width: 768px) {
        h1 {
            font-size: 2rem;
        }

        padding: 0.001em 2rem;
    }

    @media screen and (min-width: 1024px) {
        h1 {
            font-size: 2.5rem;
        }

        padding: 0.001em 3rem;
    }

    @media screen and (min-width: 1440px) {
        h1 {
            font-size: 3rem;
        }

        padding: 0.001em 4rem;
    }

    .cart-icon {
        position: absolute;
        top: 0.1em;
        right: 1.5em;
        font-size: 2rem;
        color: #fff;
        cursor: pointer;

        span {
            position: absolute;
            top: -0.15em;
            right: 1.1em;
            font-size: 1.8rem;
            font-weight: 300;
            color: #fff;
            border-radius: 50%;
            padding: 0.1em 0.3em;
        }

        @media screen and (min-width: 768px) {
            font-size: 2.5rem;
            right: 2em;

            span {
                font-size: 2.4rem;
                top: -0.2em;
                right: 1.1em;
            }
        }

        @media screen and (min-width: 1024px) {
            font-size: 3rem;
            right: 2.7em;

            span {
                font-size: 3.3rem;
                top: -0.25em;
            }
        }

        @media screen and (min-width: 1440px) {
            font-size: 3.5rem;
            right: 3em;

            span {
                font-size: 4rem;
                top: -0.3em;
                right: 0.9em;
            }
        }
    }
`;