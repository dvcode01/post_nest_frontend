import ProductsTable from "@/src/components/products/ProductsTable";
import Heading from "@/src/components/ui/Heading";
import Pagination from "@/src/components/ui/Pagination";
import { ProductsResponseApiSchema } from "@/src/schemas/schemas";
import { isValidPage } from "@/src/utils/validPage";
import { redirect } from "next/navigation";

async function getProducts(take: number, skip: number){
    const url = `${process.env.API_URL}/products?take=${take}&skip=${skip}`;
    const req = await fetch(url);

    const json = await req.json();
    const data = ProductsResponseApiSchema.parse(json);
    return {
        products: data.products,
        total: data.total
    };
}

type SearchParams = Promise<{page: string}>;

export default async function ProductsPage({searchParams}: {searchParams: SearchParams}) {
    const { page } = await searchParams;
    const productsPerPage: number = 10;

    if(!isValidPage(+page)) redirect('/admin/products?page=1')

    const skip = (+page - 1) * productsPerPage;
    const { products, total } = await getProducts(productsPerPage, skip);

    const totalPages = Math.ceil(total / productsPerPage);

    if(parseInt(page) > totalPages) redirect('/admin/products?page=1')

    return (
        <>
            <Heading>Administrar Productos</Heading>

            <ProductsTable products={products} /> 

            <Pagination page={+page} totalPages={totalPages} baseURL={'/admin/products'} />
        </>
    )
}
