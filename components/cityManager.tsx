"use client";

import { useOptimistic, useRef } from "react";
import CitiesList from "@/components/citiesList";
import { addCity, getCitiesCookie } from "@/libs/data";
import { SubmitButtonAdd } from "@/components/submitButton";
import { toast } from "@/components/ui/use-toast";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

type CityManagerProps = {
  cities: string[];
};

export default function CityManager({ cities }: CityManagerProps) {
  const ref = useRef<HTMLFormElement>(null);
  const [optimisticCities, addOptimisticCity] = useOptimistic(
    cities,
    (state: string[], newCity: string) => {
      return [...state, newCity];
    }
  );

  console.log("CityManager");

  return (
    <>
      <div className="">
        <form
          ref={ref}
          action={async (formData) => {
            ref.current?.reset();

            const city = formData.get("city") as string;
            addOptimisticCity(city);
            const { error } = await addCity(formData);
            if (error) {
              toast({
                variant: "destructive",
                title: `Error during add city ${city}`,
                description: error,
              });
            } else {
              toast({
                title: "Success",
                description: `City ${city} added`,
              });
            }
          }}
        >
          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Input
              placeholder="Paris, Manila, Kyoto..."
              type="text"
              name="city"
            />
          </FormControl>
          <div className="flex justify-end mt-2">
            <SubmitButtonAdd name="Add Clock" />
          </div>
        </form>
      </div>
      <CitiesList citiesList={optimisticCities} />
    </>
  );
}
