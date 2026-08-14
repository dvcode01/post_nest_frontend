"use client";

import { getSalesbyDate } from "@/src/lib/api";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function TransactionFilter() {
    const [date, setDate] = useState<Value>(new Date());
    const formattedDate = format(date?.toString()! || new Date(), 'yyyy-MM-dd');
    const { data, isLoading } = useQuery({
        queryKey: ['sales', formattedDate],
        queryFn: () => getSalesbyDate(formattedDate)
    });
    console.log(data)

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
            <div className="">
                <Calendar onChange={setDate} value={date} />
            </div>

            <div className="">
                {isLoading && <p>Cargando...</p>}
                3
            </div>
        </div>
    )
}
