"use server";

import { cookies } from "next/headers";
import { defaultCities } from "./constants";

export async function updateCities(cities: string[]) {
  try {
    await setCitiesCookie(cities);
    return { error: null };
  } catch (e) {
    if (e instanceof Error) {
      return { error: e.message };
    }
    return { error: "An unknown error occurred" };
  }
}

export async function deleteCity(city: string) {
  try {
    await deleteCityCookie(city);
    return { error: null };
  } catch (e) {
    if (e instanceof Error) {
      return { error: e.message };
    } else {
      return { error: "An unknown error occurred" };
    }
  }
}

export async function getCitiesCookie() {
  const cookieStore = cookies();
  const cities: string[] = JSON.parse(cookieStore.get("cities")?.value ?? "[]");
  return cities;
}

export async function setCitiesCookie(cities: string[]) {
  const cookieStore = cookies();
  cookieStore.set("cities", JSON.stringify(cities));
}

export async function deleteCityCookie(city: string) {
  const cookieStore = cookies();
  const citiesCookie = await getCitiesCookie();
  console.log("deleteCityCookie 1", citiesCookie);
  const updatedCities = citiesCookie.filter((c) => c !== city);
  cookieStore.set("cities", JSON.stringify(updatedCities));
  console.log("deleteCityCookie 2", await getCitiesCookie());
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
