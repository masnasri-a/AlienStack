import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const data = {
    message: "success",
    data: {
      count: 6,
      unread: 3,
      results: [
        {
          datetime: "2023-09-25",
          results: [
            {
              title: "Hari Terakhir Penawaran BREN",
              isOpened: false,
              redirectStock: "BRIN",
              datetime: "2023-09-24T16:13:00.000",
            },
            {
              title: "Hari Terakhir Penawaran BREN",
              isOpened: false,
              redirectStock: "BRIN",
              datetime: "2023-09-24T16:13:00.000",
            },
            {
              title: "Hari Terakhir Penawaran BREN",
              isOpened: false,
              redirectStock: "BRIN",
              datetime: "2023-09-24T16:13:00.000",
            },
          ],
        },
        {
          datetime: "2023-09-24",
          results: [
            {
              title: "Hari Terakhir Penawaran BREN",
              isOpened: true,
              redirectStock: "BRIN",
              datetime: "2023-09-24T16:13:00.000",
            },
            {
              title: "Hari Terakhir Penawaran BREN",
              isOpened: true,
              redirectStock: "BRIN",
              datetime: "2023-09-24T16:13:00.000",
            },
            {
              title: "Hari Terakhir Penawaran BREN",
              isOpened: false,
              redirectStock: "BRIN",
              datetime: "2023-09-24T16:13:00.000",
            },
          ],
        },
      ],
    },
  };
  // console.log(mock);
  return NextResponse.json({ data });
}

// export default handler
