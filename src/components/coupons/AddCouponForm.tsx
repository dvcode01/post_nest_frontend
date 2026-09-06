import { ReactNode } from "react";

export default function AddCouponForm({ children }: { children: ReactNode }) {
    return (
        <form>
            {children}

            <input
                type="submit"
                value="Agregar Cupón"
                className="bg-green-400 rounded font-bold py-2 w-full cursor-pointer mt-5" />
        </form>
    )
}
