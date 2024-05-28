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
    const citiesCopy = cities.filter((c) => c !== city); // Utilisation de filter() pour supprimer la ville de la liste
    setCities(citiesCopy);
  };

  return (
    <div className="mt-4">
      <ul className="divide-y divide-gray-200">
        {cities.map((city, index) => (
          <li key={index} className="py-2 flex justify-between items-center">
            <span className="text-lg">{city}</span>
            <Button
              onClick={() => deleteCity(city)}
              className="text-sm text-red-500 hover:text-red-700 focus:outline-none focus:text-red-700"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
