import EditProductForm from "@/src/components/products/EditProductForm";
import ProductForm from "@/src/components/products/ProductForm";
import Heading from "@/src/components/ui/Heading";
import Link from "next/link";

export default function EditProductsPage() {
    return (
        <>
            <Link href={'/admin/products?page=1'} className="bg-green-400 rounded font-bold py-2 px-10">
                Volver
            </Link>
            
            <Heading>Editar Producto: </Heading>

            <EditProductForm>
                <ProductForm />
            </EditProductForm>
        </>
    )
}
