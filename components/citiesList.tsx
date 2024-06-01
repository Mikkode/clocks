import { deleteCity, deleteCityCookie } from "@/libs/actions";
import { useOptimistic } from "react";
import { toast } from "./ui/use-toast";
import { SubmitButtonDelete } from "./submitButton";
import { capitalizeFirstLetter } from "@/libs/utils";

type CitiesListProps = {
  citiesList: string[];
};

export default function CitiesList({ citiesList }: CitiesListProps) {
  console.log("CitiesList");

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
            <span className="text-lg">{capitalizeFirstLetter(city)}</span>
            <form
              action={async (formData) => {
                supOptimisticCity(city);
                const { error } = await deleteCity(city);
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
