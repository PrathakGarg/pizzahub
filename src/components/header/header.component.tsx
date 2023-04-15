import { GiFullPizza } from "react-icons/gi";

import { HeaderContainer } from "./header.styles";

const Header = () => {
    return (
        <HeaderContainer>
            <h1>{"Pizza Hub"}</h1>
            <div className="cart-icon">
                <GiFullPizza style={{color: "white"}} />
            </div>
        </HeaderContainer>
    );
};

export default Header;