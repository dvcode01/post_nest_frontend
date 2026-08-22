import EditProductForm from "@/src/components/products/EditProductForm";
import ProductForm from "@/src/components/products/ProductForm";
import Heading from "@/src/components/ui/Heading";
import { ProductSchema } from "@/src/schemas/schemas";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getProduct(id: string){
    const url = `${process.env.API_URL}/products/${id}`;
    const req = await fetch(url);
    const json = await req.json();

    if(!req.ok){
        notFound();
    }
   
    const product = ProductSchema.parse(json);
    return product;
}

type Params = Promise<{id: string}>;

export default async function EditProductsPage({params}: {params: Params}) {
    const { id } = await params;
    const product = await getProduct(id);

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
