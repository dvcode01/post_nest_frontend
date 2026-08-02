import { create } from "zustand";
import { Product } from "../schemas/schemas";

interface store {
    total: number;
    addToCart: (product: Product) => void;
};

export const useStore = create<store>(() => ({
    total: 0,
    addToCart(product) {
        console.log(product);
    },
}));