
export default function CouponForm() {
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
                    className="border border-gray-300 w-full p-2"/>
            </div>
        </>
    )
}
