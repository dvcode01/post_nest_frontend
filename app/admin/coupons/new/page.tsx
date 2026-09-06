import AddCouponForm from "@/src/components/coupons/AddCouponForm";
import CouponForm from "@/src/components/coupons/CouponForm";
import Heading from "@/src/components/ui/Heading";
import Link from "next/link";

export default function NewCouponPage() {
    return (
        <>
            <Link href={'/admin/coupons'} className="bg-green-400 rounded font-bold py-2 px-10">
                Volver
            </Link>

            <Heading>Nuevo Cupón</Heading>

            <AddCouponForm>
                <CouponForm />
            </AddCouponForm>
        </>
    )
}
