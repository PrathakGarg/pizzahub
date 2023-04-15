import { useSelector } from "react-redux";
import { Modal } from "antd";

import { selectMenuItems, selectMenuError, selectIsMenuFetching } from "../../store/menu/menu.selector";
import { MenuContainer } from "./menu.styles";

import MenuItem from "../menu-item/menu-item.component";

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

    if (menuError !== null && menuError !== undefined && menuError.message !== undefined) {
        console.log(menuError)
        Modal.error({
            title: "Error",
            content: (
                <div>
                    <p>{menuError.message}</p>
                    <p>Please try again later.</p>
                </div>
            ),
            // icon: <MdError />,
            okText: "OK",
        });
    }

    return (
        <MenuContainer>
            {menuItems.map((item) => (
                <MenuItem key={item.id} item={item} />
            ))}
        </MenuContainer>
    );
};

export default Menu;