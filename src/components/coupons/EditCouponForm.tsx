"use client"

import { updateCoupon } from "@/actions/update-coupon-action";
import { useParams, useRouter } from "next/navigation";
import { ReactNode, useActionState, useEffect } from "react";
import { toast } from "react-toastify";

export default function EditCouponForm({ children }: { children: ReactNode }) {
    const router = useRouter();
    const { id } = useParams<{id: string}>();
    const updateCouponWithId = updateCoupon.bind(null, +id);
    const [state, dispatch] = useActionState(updateCouponWithId, {
        errors: [],
        success: ''
    });

    useEffect(() => {
        if(state.errors){
            state.errors.forEach(error => toast.error(error))
        }

        if(state.success){
            toast.success(state.success);
            router.push('/admin/coupons')
        }
    }, [state]);
    
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
