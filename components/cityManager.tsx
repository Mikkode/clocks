"use client";

import { useEffect, useState } from "react";
import CitiesList from "./citiesList";
import { addCity, getCitiesCookie } from "@/libs/data";
import { SubmitButton } from "./submitButton";
import { useFormState } from "react-dom";
import { toast } from "./ui/use-toast";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";

const initialState = {
  success: true,
  message: "",
};

export default function CityManager() {
  const [cities, setCities] = useState<string[]>([]);
  const [state, formAction] = useFormState(addCity, initialState);

  useEffect(() => {
    if (state.message.length > 0) {
      if (state.success) {
        toast({
          title: "Success",
          description: state.message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: state.message,
        });
      }
    }

    const fetchData = async () => {
      const citiesCookie = await getCitiesCookie();
      setCities(citiesCookie);
    };

    fetchData();
  }, [state]);

  return (
    <>
      <div className="">
        <form action={formAction}>
          <FormControl isRequired>
            <FormLabel>City or country name</FormLabel>
            <Input
              placeholder="Paris, Madrid, Japan, Filipina..."
              type="text"
              name="city"
            />
          </FormControl>
          <div className="flex justify-end mt-2">
            <SubmitButton />
          </div>
        </form>
      </div>
      <CitiesList citiesList={cities} />
    </>
  );
}
