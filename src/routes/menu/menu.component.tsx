import { useSelector } from "react-redux";

import { selectMenuItems, selectMenuError, selectIsMenuFetching } from "../../store/menu/menu.selector";

import MenuItem from "../../components/menu-item/menu-item.component";

const Menu = () => {
    const menuItems = useSelector(selectMenuItems);
    const menuError = useSelector(selectMenuError);
    const isMenuFetching = useSelector(selectIsMenuFetching);

    if (menuError !== null) {
        console.log(menuError);
        return <h1>Error getting the menu. Please try again.</h1>;
    }

    if (isMenuFetching) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            {menuItems.map((item) => (
                <MenuItem key={item.id} item={item} />
            ))}
        </div> 
    );
};

export default Menu;