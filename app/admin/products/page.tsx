import ProductsTable from "@/src/components/products/ProductsTable";
import Heading from "@/src/components/ui/Heading";
import { ProductsResponseApiSchema } from "@/src/schemas/schemas";

async function getProducts(){
    const url = `${process.env.API_URL}/products`;
    const req = await fetch(url);

    const json = await req.json();
    const data = ProductsResponseApiSchema.parse(json);
    return {
        products: data.products,
        total: data.total
    };
}

export default async function ProductsPage() {
    const { products } = await getProducts();

    return (
        <>
            <Heading>Administrar Productos</Heading>

            <ProductsTable products={products} /> 
        </>
    )
}
