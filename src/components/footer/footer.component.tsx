import { FooterContainer, FooterText, FooterLink } from "./footer.styles";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>
                Made with <span>❤</span> by {"Team Phoenix"}
            </FooterText>
            <FooterLink href=" " rel="noopener noreferrer">
                {"pizzahub.com"}
            </FooterLink>
        </FooterContainer>
    );
};

export default Footer;