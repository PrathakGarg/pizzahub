import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCartItemsCount } from "../../store/cart/cart.selector";

import { GiFullPizza } from "react-icons/gi";

import { HeaderContainer } from "./header.styles";


const Header = () => {
    const navigate = useNavigate();
    const cartItemsCount = useSelector(selectCartItemsCount);

    return (
        <HeaderContainer>
            <h1 onClick={() => navigate("/")}>{"Pizza Hub"}</h1>
            <div className="cart-icon">
                <span>{cartItemsCount}</span>
                <GiFullPizza style={{color: "white"}} />
            </div>
        </HeaderContainer>
    );
};

export default Header;