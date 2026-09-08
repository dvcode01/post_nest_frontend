"use server"

type ActionStateType = {
    errors: string[];
    success: string;
}

export async function addCoupon(prevState: ActionStateType, formData: FormData){
    const data = {
        name: formData.get('name'),
        percentage: formData.get('percentage'),
        expirationDate: formData.get('expirationDate'),
    };

    console.log(data);

    return {
        errors: [],
        success: ''
    }
}