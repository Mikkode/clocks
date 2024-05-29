"use server";

import { cookies } from "next/headers";
import { defaultCities } from "./constants";

export async function addCity(formData: FormData) {
  const cityName = formData.get("city");

  if (typeof cityName === "string") {
    try {
      await setCitiesCookie(cityName);
      return { error: null };
    } catch (e) {
      if (e instanceof Error) {
        return { error: e.message };
      } else {
        return { error: "An unknown error occurred" };
      }
    }
  } else {
    return { error: "City name is not a valid string" };
  }
}

export async function deleteCity(formData: FormData) {
  const cityName = formData.get("city");

  if (typeof cityName === "string") {
    try {
      await deleteCityCookie(cityName);
      return { error: null };
    } catch (e) {
      if (e instanceof Error) {
        return { error: e.message };
      } else {
        return { error: "An unknown error occurred" };
      }
    }
  } else {
    return { error: "City name is not a valid string" };
  }
}

export async function getCitiesCookie() {
  const cookieStore = cookies();
  const cities: string[] = JSON.parse(cookieStore.get("cities")?.value ?? "[]");
  if (cities.length == 0) {
    return defaultCities;
  }
  return cities;
}

export async function setCitiesCookie(city: string) {
  const cookieStore = cookies();
  let citiesCookie = await getCitiesCookie();
  citiesCookie.push(city);
  cookieStore.set("cities", JSON.stringify(citiesCookie));
}

export async function deleteCityCookie(city: string) {
  const cookieStore = cookies();
  let citiesCookie = await getCitiesCookie();
  const updatedCities = citiesCookie.filter((c) => c !== city);
  cookieStore.set("cities", JSON.stringify(updatedCities));
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
