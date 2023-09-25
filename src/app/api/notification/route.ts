import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const numbers = searchParams.get('numbers')
    const data = {
        message: 'success',
        data: numbers
    }
    // console.log(mock);
    return NextResponse.json({ data })
}

// export default handler