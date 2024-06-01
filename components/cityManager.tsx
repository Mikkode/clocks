"use client";

import { useOptimistic, useRef, useState } from "react";
import CitiesList from "@/components/citiesList";
import { updateCities } from "@/libs/actions";
import { SubmitButtonAdd } from "@/components/submitButton";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { capitalizeFirstLetter } from "@/libs/utils";

type CityManagerProps = {
  cities: string[];
};

export default function CityManager({ cities }: CityManagerProps) {
  const ref = useRef<HTMLFormElement>(null);
  const [optimisticCities, addOptimisticCity] = useOptimistic(
    cities.map((city) => city.toLowerCase()),
    (state: string[], newCity: string) => {
      return [...state, newCity];
    }
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const toast = useToast();

  return (
    <>
      <form
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();
          setErrorMessage(null);

          const city = formData.get("city") as string;
          const normalizedCity = city.toLowerCase();

          if (optimisticCities.includes(normalizedCity)) {
            setErrorMessage(
              `${capitalizeFirstLetter(normalizedCity)} is already added.`
            );
            return;
          }
          const updatedCities = [...optimisticCities, normalizedCity];
          addOptimisticCity(city);
          const { error } = await updateCities(updatedCities);
          if (error) {
            toast({
              status: "error",
              title: `Error during add city ${city} : ${error}`,
              description: error,
            });
          } else {
            toast({
              status: "success",
              title: `${capitalizeFirstLetter(city)} added`,
            });
          }
        }}
      >
        <FormControl isRequired isInvalid={!!errorMessage}>
          <FormLabel>City</FormLabel>
          <Input
            placeholder="Paris, Manila, Kyoto..."
            type="text"
            name="city"
          />
          {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
        </FormControl>
        <div className="flex justify-end mt-2">
          <SubmitButtonAdd name="Add Clock" />
        </div>
      </form>
      <CitiesList citiesList={optimisticCities} />
    </>
  );
}
