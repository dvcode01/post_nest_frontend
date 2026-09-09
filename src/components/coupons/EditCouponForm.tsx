import { ReactNode } from "react";

export default function EditCouponForm({ children }: { children: ReactNode }) {
    return (
        <>
            <form>
                {children}

                <input
                    type="submit"
                    value="Guardar Cambios"
                    className="bg-green-400 rounded font-bold py-2 w-full cursor-pointer mt-5" />
            </form>
        </>
    )
}
