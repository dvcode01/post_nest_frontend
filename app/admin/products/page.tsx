import Heading from "@/src/components/ui/Heading";
import { ProductsResponseApiSchema } from "@/src/schemas/schemas";

async function getProducts(){
    const url = `${process.env.API_URL}/products`;
    const req = await fetch(url);

    const json = await req.json();
    const products = ProductsResponseApiSchema.parse(json);
    return products;
}

export default async function ProductsPage() {
    await getProducts();

    return (
        <>
            <Heading>Administrar Productos</Heading>
        </>
    )
}
