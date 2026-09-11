"use server"

type ActionStateType = {
    errors: string[],
    success: string
};

export async function updateCoupon(prevState: ActionStateType, formData: FormData){
    console.log('desde update coupon');

    return {
        errors: [],
        success: ''
    };
}   