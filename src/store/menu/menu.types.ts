export enum MENU_ACTION_TYPES {
    FETCH_MENU_START = "FETCH_MENU_START",
    FETCH_MENU_SUCCESS = "FETCH_MENU_SUCCESS",
    FETCH_MENU_FAILURE = "FETCH_MENU_FAILURE",
}

export type PizzaSize = {size: string}
export type PizzaTopping = {name: string}

export type PizzaSizes = {
    isRadio: boolean;
    title: string;
    items: PizzaSize[];
}

export type PizzaToppings = {
    isRadio: boolean;
    title: string;
    items: PizzaTopping[];
}

export type MenuItem = {
    id: number;
    name: string;
    description: string;
    isVeg: boolean;
    rating: number;
    price: number;
    imageUrl: string;
    size: PizzaSizes;
    toppings: PizzaToppings;
}