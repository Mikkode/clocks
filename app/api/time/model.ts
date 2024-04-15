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

export async function fetchTime(latitude: number, longitude: number) {
  const validation = timeSchema.safeParse({ longitude, latitude });

  if (!validation.success) {
    return {
      error: "Invalid parameters",
      details: validation.error,
      status: 400,
    };
  }

  const { longitude: validLongitude, latitude: validLatitude } =
    validation.data;

  const url = `${process.env.TIME_API_URL}/api/Time/current/coordinate?latitude=${validLatitude}&longitude=${validLongitude}`;

  const res = await fetch(url, { next: { revalidate: 1 } });
  if (!res.ok) {
    return "Failed to fetch time";
  }

  const data = await res.json();

  return data;
}
