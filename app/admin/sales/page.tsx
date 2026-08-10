import TransactionFilter from '@/app/src/components/transactions/TransactionFilter'
import Heading from '@/app/src/components/ui/Heading'
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query'

export default async function SalesPage() {
    const queryClient = new QueryClient();

    return (
        <>
           <Heading>Ventas</Heading>

           <p className='text-lg'>En esta sección consulta todas las ventas realizadas, utiliza el calendario para filtrarlas</p>

            <HydrationBoundary state={dehydrate(queryClient)}>
                <TransactionFilter />

            </HydrationBoundary>
        </>
    )
}
