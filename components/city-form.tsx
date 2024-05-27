import { SubmitButton } from "./submitButton";
import { setCitiesCookie } from "@/libs/data";

export default function CityForm() {
  console.log("CityForm");

  const AddCity = async (formData: FormData) => {
    "use server";
    const city = formData.get("city");
    await setCitiesCookie(city);
  };

  return (
    <form action={AddCity}>
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
