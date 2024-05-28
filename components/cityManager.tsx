"use client";

import { useEffect, useState } from "react";
import CitiesList from "./citiesList";
import { addCity, getCitiesCookie } from "@/libs/data";
import { SubmitButton } from "./submitButton";
import { useFormState } from "react-dom";
import { toast } from "./ui/use-toast";

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
      <CitiesList citiesList={cities} />
      <form action={formAction}>
        <input
          type="text"
          name="city"
          placeholder="city..."
          style={{ color: "black" }}
        ></input>
        <SubmitButton />
      </form>
    </>
  );
}
