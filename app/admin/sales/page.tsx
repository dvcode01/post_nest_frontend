import TransactionFilter from '@/src/components/transactions/TransactionFilter'
import Heading from '@/src/components/ui/Heading'
import { getSalesbyDate } from '@/src/lib/api';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { format } from 'date-fns';

export default async function SalesPage() {
    const queryClient = new QueryClient();
    const today = new Date();
    const formattedDay = format(today, 'yyyy-MM-dd');

    await queryClient.prefetchQuery({
        queryKey: ['sales', formattedDay],
        queryFn: () => getSalesbyDate(formattedDay)
    });

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
