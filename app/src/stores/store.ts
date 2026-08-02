import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Product, ShoppingCart } from "../schemas/schemas";

interface store {
    total: number;
    addToCart: (product: Product) => void;
    contents: ShoppingCart;
};

export const useStore = create<store>()(devtools((set, get) => ({
    total: 0,
    contents: [],
    addToCart(product) {
        const { id: productId, ...data } = product;
        let contents: ShoppingCart = [];
        const duplicated = get().contents.findIndex(item => item.productId === productId);

        if(duplicated >= 0){
            if(get().contents[duplicated].quantity >= get().contents[duplicated].inventory) return;

            contents = get().contents.map(elem => elem.productId === productId ? {
                ...elem,
                quantity: elem.quantity + 1 
            } : elem);

        }else{
            contents = [
                ...get().contents, {
                    ...data,
                    quantity: 1,
                    productId
                }
            ];
        }
        
        set(() => ({
            contents
        }));
    },
})));