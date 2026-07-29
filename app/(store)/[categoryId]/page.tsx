import { CategoryWithProductsResponseSchema } from "@/app/src/schemas/schemas";

type params = Promise<{categoryId: string}>;

async function getProducts(categoryId: string){
    const url = `${process.env.API_URL}/categories/${categoryId}?products=true`;
    const req = await fetch(url);

    const json = await req.json();
    const products = CategoryWithProductsResponseSchema.safeParse(json);

    return products;
}

export default async function StorePage({params}: {params: params}) {
    const { categoryId } = await params;
    const category = await getProducts(categoryId);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            
        </div>
    )
}
