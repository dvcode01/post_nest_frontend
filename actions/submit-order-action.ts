"use server";

import { OrderSchema } from "@/app/src/schemas/schemas";

export async function submitOrder(data: unknown){
    const order = OrderSchema.parse(data);
    console.log(order);

    return {
        errors: [],
        success: ''
    }
}




