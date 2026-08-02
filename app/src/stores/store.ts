import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Product, ShoppingCart } from "../schemas/schemas";

interface store {
    total: number;
    contents: ShoppingCart;
    addToCart: (product: Product) => void;
    updateQuantity: (id: Product['id'], quantity: number) => void;
    removeFromCart: (id: Product['id']) => void;
    calculateTotal: () => void;
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

        get().calculateTotal();
    },
    updateQuantity(id, quantity){
        const contents = get().contents.map(item => item.productId === id ? {...item, quantity} : item);
        set(() => ({
            contents
        }));

        get().calculateTotal();
    },
    removeFromCart(id){
        set((state) => ({
            contents: state.contents.filter(item => item.productId !== id)
        }));

        get().calculateTotal();
    },
    calculateTotal(){
        const total = get().contents.reduce((total, item) => total + (item.price * item.quantity), 0);

        set(() => ({
            total
        }));
    }
})));