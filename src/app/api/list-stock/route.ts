import { NextRequest, NextResponse } from 'next/server'
import { stockData } from './data';
export async function GET(request: NextRequest) {
    // const bodies = request.body
    const param = request.nextUrl.searchParams
    const stockParam = param.get('stock')
    let response = <any>{}
    if (stockParam) {
        response['data'] = searchByCode(stockParam);
    }
    return NextResponse.json({ response })
}
const searchByCode = (query: string) => {
    const uppercaseQuery = query.toUpperCase();
    const filteredData = stockData.data.filter((item) =>
        item.Code.toUpperCase().includes(uppercaseQuery)
    );

    return filteredData.slice(0,3);
};