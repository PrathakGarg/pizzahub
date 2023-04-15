import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";

type ToggleCartAction = Action<CART_ACTION_TYPES.TOGGLE_CART_HIDDEN>;
type UpdateCartAction = ActionWithPayload<CART_ACTION_TYPES.UPDATE_CART_ITEMS, CartItem[]>;

export const toggleHidden = withMatcher((): ToggleCartAction => createAction(CART_ACTION_TYPES.TOGGLE_CART_HIDDEN));

export const updateCartItems = withMatcher((cartItems: CartItem[]): UpdateCartAction => createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, cartItems));

const addItemToCart = (cartItems: CartItem[], itemToAdd: CartItem): CartItem[] => {
    const existingItem = cartItems.find((cartItem: CartItem) => cartItem.id === itemToAdd.id);

    if (existingItem) {
        return cartItems.map((cartItem: CartItem) => {
            if (cartItem.id === itemToAdd.id) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                };
            }

            return cartItem;
        });
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }];
}

const removeItemFromCart = (cartItems: CartItem[], itemToRemove: CartItem): CartItem[] => {
    const existingItem = cartItems.find((cartItem: CartItem) => cartItem.id === itemToRemove.id);

    if (existingItem && existingItem.quantity === 1) {
        return cartItems.filter((cartItem: CartItem) => cartItem.id !== itemToRemove.id);
    }

    return cartItems.map((cartItem: CartItem) => {
        if (cartItem.id === itemToRemove.id) {
            return {
                ...cartItem,
                quantity: cartItem.quantity - 1,
            };
        }

        return cartItem;
    });
}

const clearItemFromCart = (cartItems: CartItem[], itemToClear: CartItem): CartItem[] => {
    return cartItems.filter((cartItem: CartItem) => cartItem.id !== itemToClear.id);
}

export const addCartItem = (cartItems: CartItem[], itemToAdd: CartItem) => {
    const updatedCartItems = addItemToCart(cartItems, itemToAdd);
    return updateCartItems(updatedCartItems);
}

export const removeCartItem = (cartItems: CartItem[], itemToRemove: CartItem) => {
    const updatedCartItems = removeItemFromCart(cartItems, itemToRemove);
    return updateCartItems(updatedCartItems);
}

export const clearCartItem = (cartItems: CartItem[], itemToClear: CartItem) => {
    const updatedCartItems = clearItemFromCart(cartItems, itemToClear);
    return updateCartItems(updatedCartItems);
}
