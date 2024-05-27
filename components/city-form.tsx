"use client";

import { SubmitButton } from "./submitButton";
import { addCity, setCitiesCookie } from "@/libs/data";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";

export default function CityForm() {
  console.log("CityForm");

  const { toast } = useToast();

  // const AddCity = async (formData: FormData) => {
  //   "use server";
  //   const city = formData.get("city");
  //   await setCitiesCookie(city);
  //   revalidatePath("/");
  // };

  return (
    <>
      <form action={addCity}>
        <input
          type="text"
          name="city"
          placeholder="city..."
          style={{ color: "black" }}
        ></input>
        <SubmitButton />
      </form>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
        }}
      >
        Show Toast
      </Button>
    </>
  );
}
