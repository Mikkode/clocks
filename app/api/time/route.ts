"use server";

import { NextRequest, NextResponse } from "next/server";
import { fetchTime } from "./model";
import { z } from "zod";

const preprocessStringToFloat = (val: unknown) => {
  if (typeof val === "string" || typeof val === "number") {
    const parsed = parseFloat(val as string);
    return isNaN(parsed) ? undefined : parsed;
  }
  return undefined;
};

const timeSchema = z.object({
  longitude: z.preprocess(
    preprocessStringToFloat,
    z.number().min(-180).max(180)
  ),
  latitude: z.preprocess(preprocessStringToFloat, z.number().min(-90).max(90)),
});

// getTimeByCoordinate : https://timeapi.io/api/Time/current/coordinate?latitude=${latitude}&longitude=${longitude}
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const [longitude, latitude] = [
    searchParams.get("longitude"),
    searchParams.get("latitude"),
  ];

  const validation = timeSchema.safeParse({ longitude, latitude });

  if (!validation.success) {
    return NextResponse.json(
      { error: "Invalid parameters", details: validation.error },
      { status: 400 }
    );
  }

  const { longitude: validLongitude, latitude: validLatitude } =
    validation.data;

  const url = `${process.env.TIME_API_URL}/api/Time/current/coordinate?latitude=${validLatitude}&longitude=${validLongitude}`;

  const res = await fetch(url, { next: { revalidate: 1 } });
  if (!res.ok) {
    return NextResponse.json("Failed to fetch time:");
  }

  const data = await res.json();

  return NextResponse.json(data);
}
