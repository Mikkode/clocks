"use server";

import { NextResponse } from "next/server";

const WeatherForecast = {
  cod: 1,
  message: 1,
  cnt: 1,
  list: [
    {
      dt: 1,
      main: {
        temp: 29.9,
        feels_like: 28.5,
        temp_min: 20,
        temp_max: 35,
        pressure: 1,
        sea_level: 1,
        grnd_level: 1,
        humidity: 48,
        temp_kf: 1,
      },
      weather: [
        {
          id: 800,
          main: "Main",
          description: "Description weather",
          icon: "",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1,
        deg: 1,
        gust: 1,
      },
      visibility: 1,
      pop: 1,
      rain: {
        "3h": 1,
      },
      sys: {
        pod: 1,
      },
      dt_txt: "",
    },
    {
      dt: 1,
      main: {
        temp: 29.9,
        feels_like: 28.5,
        temp_min: 20,
        temp_max: 35,
        pressure: 1,
        sea_level: 1,
        grnd_level: 1,
        humidity: 48,
        temp_kf: 1,
      },
      weather: [
        {
          id: 800,
          main: "Main",
          description: "Description weather",
          icon: "",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1,
        deg: 1,
        gust: 1,
      },
      visibility: 1,
      pop: 1,
      rain: {
        "3h": 1,
      },
      sys: {
        pod: 1,
      },
      dt_txt: "",
    },
    {
      dt: 1,
      main: {
        temp: 29.9,
        feels_like: 28.5,
        temp_min: 20,
        temp_max: 35,
        pressure: 1,
        sea_level: 1,
        grnd_level: 1,
        humidity: 48,
        temp_kf: 1,
      },
      weather: [
        {
          id: 800,
          main: "Main",
          description: "Description weather",
          icon: "",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1,
        deg: 1,
        gust: 1,
      },
      visibility: 1,
      pop: 1,
      rain: {
        "3h": 1,
      },
      sys: {
        pod: 1,
      },
      dt_txt: "",
    },
    {
      dt: 1,
      main: {
        temp: 29.9,
        feels_like: 28.5,
        temp_min: 20,
        temp_max: 35,
        pressure: 1,
        sea_level: 1,
        grnd_level: 1,
        humidity: 48,
        temp_kf: 1,
      },
      weather: [
        {
          id: 800,
          main: "Main",
          description: "Description weather",
          icon: "",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1,
        deg: 1,
        gust: 1,
      },
      visibility: 1,
      pop: 1,
      rain: {
        "3h": 1,
      },
      sys: {
        pod: 1,
      },
      dt_txt: "",
    },
    {
      dt: 1,
      main: {
        temp: 29.9,
        feels_like: 28.5,
        temp_min: 20,
        temp_max: 35,
        pressure: 1,
        sea_level: 1,
        grnd_level: 1,
        humidity: 48,
        temp_kf: 1,
      },
      weather: [
        {
          id: 800,
          main: "Main",
          description: "Description weather",
          icon: "",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1,
        deg: 1,
        gust: 1,
      },
      visibility: 1,
      pop: 1,
      rain: {
        "3h": 1,
      },
      sys: {
        pod: 1,
      },
      dt_txt: "",
    },
    {
      dt: 1,
      main: {
        temp: 29.9,
        feels_like: 28.5,
        temp_min: 20,
        temp_max: 35,
        pressure: 1,
        sea_level: 1,
        grnd_level: 1,
        humidity: 48,
        temp_kf: 1,
      },
      weather: [
        {
          id: 800,
          main: "Main",
          description: "Description weather",
          icon: "",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1,
        deg: 1,
        gust: 1,
      },
      visibility: 1,
      pop: 1,
      rain: {
        "3h": 1,
      },
      sys: {
        pod: 1,
      },
      dt_txt: "",
    },
    {
      dt: 1,
      main: {
        temp: 29.9,
        feels_like: 28.5,
        temp_min: 20,
        temp_max: 35,
        pressure: 1,
        sea_level: 1,
        grnd_level: 1,
        humidity: 48,
        temp_kf: 1,
      },
      weather: [
        {
          id: 800,
          main: "Main",
          description: "Description weather",
          icon: "",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1,
        deg: 1,
        gust: 1,
      },
      visibility: 1,
      pop: 1,
      rain: {
        "3h": 1,
      },
      sys: {
        pod: 1,
      },
      dt_txt: "",
    },
    {
      dt: 1,
      main: {
        temp: 29.9,
        feels_like: 28.5,
        temp_min: 20,
        temp_max: 35,
        pressure: 1,
        sea_level: 1,
        grnd_level: 1,
        humidity: 48,
        temp_kf: 1,
      },
      weather: [
        {
          id: 800,
          main: "Main",
          description: "Description weather",
          icon: "",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1,
        deg: 1,
        gust: 1,
      },
      visibility: 1,
      pop: 1,
      rain: {
        "3h": 1,
      },
      sys: {
        pod: 1,
      },
      dt_txt: "",
    },
    {
      dt: 1,
      main: {
        temp: 29.9,
        feels_like: 28.5,
        temp_min: 20,
        temp_max: 35,
        pressure: 1,
        sea_level: 1,
        grnd_level: 1,
        humidity: 48,
        temp_kf: 1,
      },
      weather: [
        {
          id: 800,
          main: "Main",
          description: "Description weather",
          icon: "",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1,
        deg: 1,
        gust: 1,
      },
      visibility: 1,
      pop: 1,
      rain: {
        "3h": 1,
      },
      sys: {
        pod: 1,
      },
      dt_txt: "",
    },
    {
      dt: 1,
      main: {
        temp: 29.9,
        feels_like: 28.5,
        temp_min: 20,
        temp_max: 35,
        pressure: 1,
        sea_level: 1,
        grnd_level: 1,
        humidity: 48,
        temp_kf: 1,
      },
      weather: [
        {
          id: 800,
          main: "Main",
          description: "Description weather",
          icon: "",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1,
        deg: 1,
        gust: 1,
      },
      visibility: 1,
      pop: 1,
      rain: {
        "3h": 1,
      },
      sys: {
        pod: 1,
      },
      dt_txt: "",
    },
    {
      dt: 1,
      main: {
        temp: 29.9,
        feels_like: 28.5,
        temp_min: 20,
        temp_max: 35,
        pressure: 1,
        sea_level: 1,
        grnd_level: 1,
        humidity: 48,
        temp_kf: 1,
      },
      weather: [
        {
          id: 800,
          main: "Main",
          description: "Description weather",
          icon: "",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1,
        deg: 1,
        gust: 1,
      },
      visibility: 1,
      pop: 1,
      rain: {
        "3h": 1,
      },
      sys: {
        pod: 1,
      },
      dt_txt: "",
    },
    {
      dt: 1,
      main: {
        temp: 29.9,
        feels_like: 28.5,
        temp_min: 20,
        temp_max: 35,
        pressure: 1,
        sea_level: 1,
        grnd_level: 1,
        humidity: 48,
        temp_kf: 1,
      },
      weather: [
        {
          id: 800,
          main: "Main",
          description: "Description weather",
          icon: "",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1,
        deg: 1,
        gust: 1,
      },
      visibility: 1,
      pop: 1,
      rain: {
        "3h": 1,
      },
      sys: {
        pod: 1,
      },
      dt_txt: "",
    },
    {
      dt: 1,
      main: {
        temp: 29.9,
        feels_like: 28.5,
        temp_min: 20,
        temp_max: 35,
        pressure: 1,
        sea_level: 1,
        grnd_level: 1,
        humidity: 48,
        temp_kf: 1,
      },
      weather: [
        {
          id: 800,
          main: "Main",
          description: "Description weather",
          icon: "",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1,
        deg: 1,
        gust: 1,
      },
      visibility: 1,
      pop: 1,
      rain: {
        "3h": 1,
      },
      sys: {
        pod: 1,
      },
      dt_txt: "",
    },
    {
      dt: 1,
      main: {
        temp: 29.9,
        feels_like: 28.5,
        temp_min: 20,
        temp_max: 35,
        pressure: 1,
        sea_level: 1,
        grnd_level: 1,
        humidity: 48,
        temp_kf: 1,
      },
      weather: [
        {
          id: 800,
          main: "Main",
          description: "Description weather",
          icon: "",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1,
        deg: 1,
        gust: 1,
      },
      visibility: 1,
      pop: 1,
      rain: {
        "3h": 1,
      },
      sys: {
        pod: 1,
      },
      dt_txt: "",
    },
    {
      dt: 1,
      main: {
        temp: 29.9,
        feels_like: 28.5,
        temp_min: 20,
        temp_max: 35,
        pressure: 1,
        sea_level: 1,
        grnd_level: 1,
        humidity: 48,
        temp_kf: 1,
      },
      weather: [
        {
          id: 800,
          main: "Main",
          description: "Description weather",
          icon: "",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1,
        deg: 1,
        gust: 1,
      },
      visibility: 1,
      pop: 1,
      rain: {
        "3h": 1,
      },
      sys: {
        pod: 1,
      },
      dt_txt: "",
    },
    {
      dt: 1,
      main: {
        temp: 29.9,
        feels_like: 28.5,
        temp_min: 20,
        temp_max: 35,
        pressure: 1,
        sea_level: 1,
        grnd_level: 1,
        humidity: 48,
        temp_kf: 1,
      },
      weather: [
        {
          id: 800,
          main: "Main",
          description: "Description weather",
          icon: "",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1,
        deg: 1,
        gust: 1,
      },
      visibility: 1,
      pop: 1,
      rain: {
        "3h": 1,
      },
      sys: {
        pod: 1,
      },
      dt_txt: "",
    },
    {
      dt: 1,
      main: {
        temp: 29.9,
        feels_like: 28.5,
        temp_min: 20,
        temp_max: 35,
        pressure: 1,
        sea_level: 1,
        grnd_level: 1,
        humidity: 48,
        temp_kf: 1,
      },
      weather: [
        {
          id: 800,
          main: "Main",
          description: "Description weather",
          icon: "",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1,
        deg: 1,
        gust: 1,
      },
      visibility: 1,
      pop: 1,
      rain: {
        "3h": 1,
      },
      sys: {
        pod: 1,
      },
      dt_txt: "",
    },
  ],
  city: {
    id: 1,
    name: "Paris",
    coord: {
      lat: 1,
      lon: 1,
    },
    country: "France",
    population: 1,
    timezone: 1,
    sunrise: 1,
    sunset: 1,
  },
};

// ForecastWeather
export async function GET() {
  return NextResponse.json(WeatherForecast);
}
