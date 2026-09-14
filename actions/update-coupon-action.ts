"use server"

type ActionStateType = {
    errors: string[],
    success: string
};

export async function updateCoupon(couponId: number, prevState: ActionStateType, formData: FormData){
    console.log('desde update coupon');
    console.log(couponId);

    return {
        errors: [],
        success: ''
    };
}   