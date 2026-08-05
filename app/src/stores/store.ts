import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CounponResponseSchema, Coupon, Product, ShoppingCart } from "../schemas/schemas";

interface store {
    total: number;
    discount: number;
    contents: ShoppingCart;
    coupon: Coupon;
    addToCart: (product: Product) => void;
    updateQuantity: (id: Product['id'], quantity: number) => void;
    removeFromCart: (id: Product['id']) => void;
    calculateTotal: () => void;
    applyCoupon: (couponName: string) => Promise<void>;
    applyDiscount: () => void;
};

export const useStore = create<store>()(devtools((set, get) => ({
    total: 0,
    discount: 0,
    contents: [],
    coupon: {
        name: '',
        percentage: 0,
        message: ''
    },
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

        if(get().coupon.percentage){
            get().applyDiscount();
        }
    },
    async applyCoupon(couponName) {
        const req = await fetch('/coupons/api', {
            method: 'POST',
            body: JSON.stringify({
                coupon_name: couponName
            })
        });

        const json = await req.json();
        const coupon = CounponResponseSchema.parse(json);
        
        set(() => ({
            coupon
        }));

        if(coupon.percentage){
            get().applyDiscount();
        }
    },
    applyDiscount() {
        const subTotalAmount = get().contents.reduce((total, item) => total + (item.price * item.quantity), 0);
        const discount = (get().coupon.percentage / 100) * subTotalAmount;
        const total = subTotalAmount - discount;

        set(() => ({
            total,
            discount
        }));
    },
})));