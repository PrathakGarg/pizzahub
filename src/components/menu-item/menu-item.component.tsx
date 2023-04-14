import { FC } from "react"
import { BiCheckboxSquare } from "react-icons/bi"

import { MenuItem as Item } from "../../store/menu/menu.types"
import { MenuItemContainer, MenuItemDetails, MenuItemImage, MenuItemTitle } from "./menu-item.styles"

import Rating from "../rating/rating.component"

type MenuItemProps = {
    item: Item
}

const MenuItem: FC<MenuItemProps> = ({ item }) => (
    <MenuItemContainer>
        <MenuItemImage src={`${item.img_url}`} />
        <MenuItemDetails>
            <MenuItemTitle>
                <BiCheckboxSquare style={{color: (item.isVeg ? 'green':'red'), width: "1.5em", height: "1.5em"}} />
                <p>{item.name}</p>
            </MenuItemTitle>

            <p>{item.description}</p>
            <Rating rating={item.rating} />
            <p>{`₹${item.price}`}</p>
        </MenuItemDetails>
    </MenuItemContainer>
)

export default MenuItem