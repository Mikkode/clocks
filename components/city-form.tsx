"use client";

import { SubmitButton } from "./submitButton";
import { addCity, setCitiesCookie } from "@/libs/data";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";
import { useFormState } from "react-dom";
import { useEffect } from "react";

const initialState = {
  success: true,
  message: "",
};

export default function CityForm() {
  const [state, formAction] = useFormState(addCity, initialState);
  const { toast } = useToast();

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
  }, [state]);

  return (
    <form action={formAction}>
      <input
        type="text"
        name="city"
        placeholder="city..."
        style={{ color: "black" }}
      ></input>
      <SubmitButton />
    </form>
  );
}
