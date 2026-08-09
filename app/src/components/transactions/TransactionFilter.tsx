"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function TransactionFilter() {
    const [date, setDate] = useState<Value>(new Date());

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
            <div className="">
                <Calendar onChange={setDate} value={date} />
            </div>

            <div className="">
                3
            </div>
        </div>
    )
}
