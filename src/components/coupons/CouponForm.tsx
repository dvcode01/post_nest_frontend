import { Coupon } from "@/src/schemas/schemas";

export default function CouponForm({coupon}: {coupon?: Coupon}) {
    return (
        <>
            <div className="space-y-2 ">
                <label
                    htmlFor="name"
                    className="block"
                >Nombre Cupón</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Nombre Cupón"
                    className="border border-gray-300 w-full p-2"
                    name="name"
                    defaultValue={coupon?.name}
                />
            </div>

            <div className="space-y-2 ">
                <label
                    htmlFor="percentage"
                    className="block"
                >Porcentaje</label>
                <input
                    id="percentage"
                    type="number"
                    placeholder="Porcentaje"
                    className="border border-gray-300 w-full p-2"
                    name="percentage"
                    min={0}
                    defaultValue={coupon?.percentage}
                />
            </div>

            <div className="space-y-2 ">
                <label
                    htmlFor="expirationDate"
                    className="block"
                >Fecha de Expiración</label>
                <input 
                    type="date" 
                    name="expirationDate" 
                    id="expirationDate" 
                    className="border border-gray-300 w-full p-2"
                    defaultValue={coupon?.expirationDate}/>
            </div>
        </>
    )
}
