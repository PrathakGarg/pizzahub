export enum CART_ACTION_TYPES {
    TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
    UPDATE_CART_ITEMS = 'UPDATE_CART_ITEMS',
}

export type CartItem = {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
    size: string;
    toppings: string[];
};
