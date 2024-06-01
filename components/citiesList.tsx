import { deleteCity } from "@/libs/actions";
import { useOptimistic } from "react";
import { SubmitButtonDelete } from "./submitButton";
import { capitalizeFirstLetter } from "@/libs/utils";
import { useToast } from "@chakra-ui/react";

type CitiesListProps = {
  citiesList: string[];
};

export default function CitiesList({ citiesList }: CitiesListProps) {
  const [optimisticCities, supOptimisticCity] = useOptimistic(
    citiesList,
    (state: string[], deletedCity: string) => {
      return state.filter((city) => city !== deletedCity);
    }
  );

  const toast = useToast();

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
                    status: "error",
                    title: `Error during deleting city ${capitalizeFirstLetter(
                      city
                    )}`,
                    description: error,
                  });
                } else {
                  toast({
                    status: "success",
                    title: `${capitalizeFirstLetter(city)} deleted`,
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
