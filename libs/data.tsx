"use server";

import { cookies } from "next/headers";

export const addCity = async (formData: FormData) => {
  "use server";
  const city = formData.get("city");
  await setCitiesCookie(city);
};

export async function getCitiesCookie() {
  let cities: string[] = ["Paris", "Kyoto"];
  const cookieStore = cookies();
  const citiesCookie = cookieStore.get("cities")?.value;

  if (citiesCookie !== undefined) {
    cities = JSON.parse(cookieStore.get("cities")?.value ?? "[]");
  }

  return cities;
}

export async function setCitiesCookie(city: string) {
  const cookieStore = cookies();
  let citiesCookie = await getCitiesCookie();
  citiesCookie.push(city);
  cookieStore.set("cities", JSON.stringify(citiesCookie));
}

export async function getTimeZoneByCity(city: string) {
  const { latitude, longitude } = await getCoordinates(city);
  const timeZone = await getTimeZone(latitude, longitude);

  return timeZone;
}

export async function getWeather(city: string): Promise<WeatherData> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.KEY_OPEN_WEATHER_MAP}`,
    { next: { revalidate: 5 } }
  );
  if (!res.ok) {
    throw new Error(
      `Failed to fetch getWeather, status ${res.status} ${res.statusText}`
    );
  }

  return res.json();
}

export async function getForecastWeather(
  latitude: number,
  longitude: number
): Promise<WeatherForecast> {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=17&units=metric&APPID=${process.env.KEY_OPEN_WEATHER_MAP}`,
    { next: { revalidate: 5 } }
  );
  if (!res.ok) {
    throw new Error(
      `Failed to fetch getForecastWeather, status ${res.status} ${res.statusText}`
    );
  }

  return res.json();
}

export async function getCoordinates(city: string): Promise<CoordinateData> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.KEY_OPEN_WEATHER_MAP}`,
    { next: { revalidate: 5 } }
  );
  if (!res.ok) {
    throw new Error(
      `Failed to fetch coordinate from ${city}. Status ${res.status} ${res.statusText}`
    );
  }

  const data = await res.json();

  return {
    latitude: data.coord.lat,
    longitude: data.coord.lon,
  };
}

export async function getTimeZone(
  latitude: number,
  longitude: number
): Promise<string> {
  const res = await fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${process.env.KEY_GEOAPIFY}`,
    { next: { revalidate: 5 } }
  );
  if (!res.ok) {
    throw new Error(
      `Failed to fetch timeZone. Status ${res.status} ${res.statusText}`
    );
  }

  const data = await res.json();

  return data.results[0].timezone.name;
}

export async function test1() {
  return await new Promise((resolve) => setTimeout(resolve, 3000));
}
