import Heading from "@/src/components/ui/Heading";
import Link from "next/link";

export default function NewProductPage() {
    return (
        <>
            <Link href={'/admin/products?page=1'} className="bg-green-400 rounded font-bold py-2 px-10">
                Volver
            </Link>

            <Heading>Nuevo Producto</Heading>
        </>
    )
}
