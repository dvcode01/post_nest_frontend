"use client"

import { updateCoupon } from "@/actions/update-coupon-action";
import { useParams } from "next/navigation";
import { ReactNode, useActionState } from "react";

export default function EditCouponForm({ children }: { children: ReactNode }) {
    const { id } = useParams<{id: string}>();
    const updateCouponWithId = updateCoupon.bind(null, +id);
    const [state, dispatch] = useActionState(updateCouponWithId, {
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
