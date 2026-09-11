"use client"

import { updateCoupon } from "@/actions/update-coupon-action";
import { ReactNode, useActionState } from "react";

export default function EditCouponForm({ children }: { children: ReactNode }) {
    const [state, dispatch] = useActionState(updateCoupon, {
        errors: [],
        success: ''
    });
    
    return (
        <>
            <form action={dispatch}>
                {children}

                <input
                    type="submit"
                    value="Guardar Cambios"
                    className="bg-green-400 rounded font-bold py-2 w-full cursor-pointer mt-5" />
            </form>
        </>
    )
}
