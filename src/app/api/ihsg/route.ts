import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const data = {
    vendor_code: "COMPOSITE",
    shown_code: "IHSG",
    name: "Indeks Harga Saham Gabungan",
    price: 6998.381,
    change: 0,
    change_pct: 0e-8,
    open: 7016.985,
    high: 7029.766,
    low: 6994.439,
    traded_value: 9115383608400.0,
    volume: 17101370700,
    frequency: 1327628,
    close_price: 6998.381,
    update_time: 1695657621486,
  };
  return NextResponse.json({ data });
}
