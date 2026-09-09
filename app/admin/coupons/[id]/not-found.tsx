import Heading from "@/src/components/ui/Heading";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-center">
            <Heading>Cupón No Encontrado</Heading>

            <p>
                Tal vez quieras volver a <Link href={'/admin/coupons'} className="text-green-400">Cupones</Link>
            </p>
        </div>
    )
}
