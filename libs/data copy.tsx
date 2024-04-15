"use server";

// const KEY_OPEN_WEATHER_MAP = "3793c50b36aa0dd3c07036bfdbfc0ffe";

type WeatherData = {
  coord: { lon: number; lat: number };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number; gust: number };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

type TimeData = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  seconds: number;
  milliSeconds: number;
  dateTime: string;
  date: string;
  time: string;
  timeZone: string;
  dayOfWeek: string;
  dstActive: boolean;
};

type WeatherForecast = {
  cod: number;
  message: number;
  cnt: number;
  list: [
    {
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
      clouds: {
        all: number;
      };
      wind: {
        speed: number;
        deg: number;
        gust: number;
      };
      visibility: number;
      pop: number;
      rain: {
        "3h": number;
      };
      sys: {
        pod: string;
      };
      dt_txt: string;
    }
  ];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};

type WeatherTimeData = {
  weather: WeatherData;
  forecast: WeatherForecast;
  time: TimeData;
};

export type ClockData = {
  weatherTime: WeatherTimeData;
  date: Date;
};

async function getTime(where: string) {
  const res = await fetch(
    "https://timeapi.io/api/Time/current/zone?timeZone=" + where,
    { next: { revalidate: 1 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getTimeByCoordinate(latitude: number, longitude: number) {
  const res = await fetch(
    `https://timeapi.io/api/Time/current/coordinate?latitude=${latitude}&longitude=${longitude}`,
    { next: { revalidate: 1 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getWeather(where: string) {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      where +
      "&units=metric&APPID=" +
      process.env.KEY_OPEN_WEATHER_MAP,
    { next: { revalidate: 1 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getForecastWeather(latitude: number, longitude: number) {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=17&units=metric&APPID=${process.env.KEY_OPEN_WEATHER_MAP}`,
    { next: { revalidate: 1 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getData(where: string) {
  try {
    const weatherData = await getWeather(where);
    const latitude = weatherData.coord.lat;
    const longitude = weatherData.coord.lon;
    const timeData = await getTimeByCoordinate(latitude, longitude);
    const forecastData = await getForecastWeather(latitude, longitude);
    const combinedData = {
      weather: weatherData,
      forecast: forecastData,
      time: timeData,
    };

    return combinedData;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

async function getClocksData(cities: string[]) {
  const clocksData = [];
  for (const city of cities) {
    const weatherData: WeatherTimeData = await getData(city);
    const newClockData = {
      weatherTime: weatherData,
      date: new Date(weatherData.time.dateTime),
    };
    clocksData.push(newClockData);
  }

  // const res2 = await fetch(`http://localhost:3000/api/fake`, {
  //   next: { revalidate: 1 },
  // });
  // if (!res2.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  // return res.json();

  return clocksData;
}

async function test1() {
  return await new Promise((resolve) => setTimeout(resolve, 3000));
}

export { getClocksData, test1 };
