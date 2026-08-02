import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Product, ShoppingCart } from "../schemas/schemas";

interface store {
    total: number;
    addToCart: (product: Product) => void;
    contents: ShoppingCart;
};

export const useStore = create<store>()(devtools(() => ({
    total: 0,
    contents: [],
    addToCart(product) {
        console.log(product);
    },
})));