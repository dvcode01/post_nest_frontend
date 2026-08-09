import TransactionFilter from '@/app/src/components/transactions/TransactionFilter'
import Heading from '@/app/src/components/ui/Heading'

export default function SalesPage() {
    return (
        <>
           <Heading>Ventas</Heading>

           <p className='text-lg'>En esta sección consulta todas las ventas realizadas, utiliza el calendario para filtrarlas</p>

           <TransactionFilter />
        </>
    )
}
