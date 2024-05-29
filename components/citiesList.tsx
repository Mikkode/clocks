import { deleteCity, deleteCityCookie } from "@/libs/data";
import { Button } from "@/components/ui/button";
import { useOptimistic } from "react";
import { toast } from "./ui/use-toast";
import { SubmitButtonDelete } from "./submitButton";

type CitiesListProps = {
  citiesList: string[];
};

export default function CitiesList({ citiesList }: CitiesListProps) {
  console.log("CitiesList", citiesList);

  const [optimisticCities, supOptimisticCity] = useOptimistic(
    citiesList,
    (state: string[], deletedCity: string) => {
      return state.filter((city) => city !== deletedCity);
    }
  );

  return (
    <div className="mt-4">
      <ul className="divide-y divide-gray-200">
        {optimisticCities?.map((city, index) => (
          <li key={index} className="py-2 flex justify-between items-center">
            <span className="text-lg">{city}</span>
            <form
              action={async (formData) => {
                formData.append("city", city);
                // addOptimisticCity(city);
                const { error } = await deleteCity(formData);
                if (error) {
                  toast({
                    variant: "destructive",
                    title: `Error during deleting city ${city}`,
                    description: error,
                  });
                } else {
                  toast({
                    title: "Success",
                    description: `City ${city} deleted`,
                  });
                }
              }}
            >
              <SubmitButtonDelete name="Delete" />
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
