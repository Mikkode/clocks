"use client";

import { deleteCityCookie, getCitiesCookie } from "@/libs/data";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

type CitiesListProps = {
  citiesList: string[];
};

export default function CitiesList({ citiesList }: CitiesListProps) {
  const [cities, setCities] = useState<string[]>(citiesList);

  useEffect(() => {
    setCities(citiesList);
  }, [citiesList]);

  const deleteCity = async (city: string) => {
    await deleteCityCookie(city);
    const citiesCopy = [...cities];

    let index: number = citiesCopy.indexOf(city);
    if (index !== -1) {
      citiesCopy.splice(index, 1);
    }
    setCities(citiesCopy);
  };

  return (
    <div>
      {cities.map((city, index) => (
        <div key={index}>
          <li className="text-black">
            {city}
            {<Button onClick={() => deleteCity(city)}>del</Button>}
          </li>
        </div>
      ))}
    </div>
  );
}
