import { Coupon } from "@/src/schemas/schemas";
import { revalidatePath } from "next/cache";

export default function DeleteCouponForm({ couponId }: { couponId: Coupon['id'] }) {
    const handleDeleteCoupon = async () => {
        "use server"

        const url = `${process.env.API_URL}/coupons/${couponId}`;
        const req = await fetch(url, {
            method: 'DELETE',
        });

        await req.json();
        revalidatePath('/admin/coupons');
    };

    return (
        <>
            <form action={handleDeleteCoupon}>
                <input
                    type="submit"
                    className="text-red-600 hover:text-red-800 cursor-pointer"
                    value="Eliminar" />
            </form>
        </>
    )
}
