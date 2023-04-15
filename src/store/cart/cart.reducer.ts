import { CartItem } from "./cart.types";
import { toggleHidden, updateCartItems } from "./cart.action";

export type CartState = {
    hidden: boolean;
    cartItems: CartItem[];
};

const INITIAL_STATE: CartState = {
    hidden: true,
    cartItems: [],
};

export const cartReducer = (state: CartState = INITIAL_STATE, action: any): CartState => {
    if (toggleHidden.match(action)) {
        return {
            ...state,
            hidden: !state.hidden,
        };
    }

    if (updateCartItems.match(action)) {
        return {
            ...state,
            cartItems: action.payload,
        };
    }

    return state;
}