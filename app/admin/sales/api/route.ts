import { NextRequest } from "next/server";

export async function GET(request: NextRequest){
    const { nextUrl: { searchParams } } = request;
    const transactionDate = searchParams.get('transactionDate');

    const url = `${process.env.API_URL}/transactions?transactionDate=${transactionDate}`;
    const req = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const response = await req.json();
    return Response.json(response);
}