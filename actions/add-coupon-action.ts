"use server"

import { CouponFormSchema } from "@/src/schemas/schemas";

type ActionStateType = {
    errors: string[];
    success: string;
}

export async function addCoupon(prevState: ActionStateType, formData: FormData){
    const coupon = CouponFormSchema.safeParse({
        name: formData.get('name'),
        percentage: formData.get('percentage'),
        expirationDate: formData.get('expirationDate'),
    });

    if(!coupon.success){
        return {
            errors: coupon.error.issues.map(issue => issue.message),
            success: ''
        };
    }

    return {
        errors: [],
        success: ''
    }
}