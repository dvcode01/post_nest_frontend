import Heading from "@/src/components/ui/Heading";
import { CouponSchema } from "@/src/schemas/schemas";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getCoupon(id: string) {
    const url = `${process.env.API_URL}/coupons/${id}`;
    const req = await fetch(url);

    const json = await req.json();

    if(!req.ok){
        notFound();
    }
       
    const coupon = CouponSchema.parse(json);
    return coupon;
}

type Params = Promise<{id: string}>;

export default async function EditCouponPage({params}: {params: Params}) {
    const { id } = await params;
    const coupon = await getCoupon(id);
    
    return (
        <>

            <Link href={'/admin/coupons'} className="bg-green-400 rounded font-bold py-2 px-10">
                Volver
            </Link>

            <Heading>Editar Cupón: {coupon.name}</Heading>

        </>
    )
}
