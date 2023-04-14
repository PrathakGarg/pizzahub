import { useSelector } from "react-redux";

import { selectMenuItems, selectMenuError, selectIsMenuFetching } from "../../store/menu/menu.selector";

import MenuItem from "../../components/menu-item/menu-item.component";
import { MenuContainer } from "./menu.styles";

const Menu = () => {
    const menuItems = useSelector(selectMenuItems);
    const menuError = useSelector(selectMenuError);
    const isMenuFetching = useSelector(selectIsMenuFetching);

    if (isMenuFetching) {
        return (
            <MenuContainer>
                <div>Loading...</div>
            </MenuContainer>
        )
    }

    return (
        <MenuContainer>
            {menuError && (
                <div>
                    There was an error getting the menu
                </div>
            )}
            {menuItems.map((item) => (
                <MenuItem key={item.id} item={item} />
            ))}
        </MenuContainer> 
    );
};

export default Menu;