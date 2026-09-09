import Heading from "@/src/components/ui/Heading";
import Link from "next/link";

export default function EditCouponPage() {
    return (
        <>

            <Link href={'/admin/coupons'} className="bg-green-400 rounded font-bold py-2 px-10">
                Volver
            </Link>

            <Heading>Editar Cupón: </Heading>

        </>
    )
}
