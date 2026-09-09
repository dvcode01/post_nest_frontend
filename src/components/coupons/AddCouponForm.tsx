"use client"

import { addCoupon } from "@/actions/add-coupon-action";
import { useRouter } from "next/navigation";
import { ReactNode, useActionState, useEffect } from "react";
import { toast } from "react-toastify";

export default function AddCouponForm({ children }: { children: ReactNode }) {
    const router = useRouter();
    const [state, dispatch] = useActionState(addCoupon, {
        errors: [],
        success: ''        
    });

    useEffect(() => {
        if(state.errors){
            state.errors.forEach(error => toast.error(error))
        }

        if(state.success){
            toast.success(state.success);
            router.push('/admin/coupons');
        }

    }, [state]);

    return (
        <form action={dispatch}>
            {children}

            <input
                type="submit"
                value="Agregar Cupón"
                className="bg-green-400 rounded font-bold py-2 w-full cursor-pointer mt-5" />
        </form>
    )
}
