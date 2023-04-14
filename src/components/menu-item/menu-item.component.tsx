import { FC } from "react"

import { MenuItem as Item } from "../../store/menu/menu.types"

type MenuItemProps = {
    item: Item
}

const MenuItem: FC<MenuItemProps> = ({ item }) => (
    <div>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>{item.price}</p>
    </div>
)

export default MenuItem