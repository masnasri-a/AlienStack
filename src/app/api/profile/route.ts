import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    // const { searchParams } = new URL(request.url)
    const data = {
        message: 'success',
        data: {
            'images':'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/07/19/IMG_6701-3614424737.jpeg',
            'name':'Nasri Adzlani',
            'position':'Backend Engineer'
        }
    }
    // console.log(mock);
    return NextResponse.json({ data })
}

// export default handler