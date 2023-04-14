import { FC } from "react"
import { BiCheckboxSquare } from "react-icons/bi"

import { MenuItem as Item } from "../../store/menu/menu.types"

import { MenuItemContainer } from "./menu-item.styles"

type MenuItemProps = {
    item: Item
}

const MenuItem: FC<MenuItemProps> = ({ item }) => (
    <MenuItemContainer>
        <h1>{item.name}</h1>
        <BiCheckboxSquare style={{color: (item.isVeg ? 'green':'red')}} />
        <p>{item.description}</p>
        <p>{`₹${item.price}`}</p>
    </MenuItemContainer>
)

export default MenuItem