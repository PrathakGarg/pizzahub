import { AddToCartButtonContainer, AddToCartButtonLeft, AddToCartButtonRight } from "./add-to-cart-button.styles"

const AddToCartButton = () => {
    return (
        <AddToCartButtonContainer>
            <AddToCartButtonLeft
                onClick={() => console.log("Add to cart button clicked")}
            >
                Add
            </AddToCartButtonLeft>
            <AddToCartButtonRight
                onClick={() => console.log("Add to cart button clicked")}
            >
                +
            </AddToCartButtonRight>
        </AddToCartButtonContainer>
    )
}

export default AddToCartButton