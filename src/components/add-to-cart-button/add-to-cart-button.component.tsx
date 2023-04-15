import { FC, useState } from "react"

import { MenuItem } from "../../store/menu/menu.types"

import PizzaModal from "../pizza-modal/pizza-modal.component"

import { AddToCartButtonContainer, AddToCartButtonLeft, AddToCartButtonRight } from "./add-to-cart-button.styles"

type AddToCartButtonProps = {
    item: MenuItem
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOk = () => {
        setIsOpen(false)
    }

    const handleCancel = () => {
        setIsOpen(false)
    }

    return (
        <AddToCartButtonContainer>
            <AddToCartButtonLeft
                onClick={() => setIsOpen(true)}
            >
                Add
            </AddToCartButtonLeft>
            <AddToCartButtonRight
                onClick={() => setIsOpen((true))}
            >
                +
            </AddToCartButtonRight>

            <PizzaModal
                item={item}
                isOpen={isOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
        </AddToCartButtonContainer>
    )
}

export default AddToCartButton