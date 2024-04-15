import Image from "next/image";
import loadingSvg from "@/assets/loading.svg";
import loadingWeatherSvg from "@/assets/loading-weather.svg";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  // return <LoadingSkeleton />
  return (
    <div className="flex items-center justify-center h-screen">
      <Image src={loadingSvg} alt="loading..." priority />
    </div>
  );
}

function LoadingWeather() {
  return (
    <div className="flex items-center justify-center">
      <Image src={loadingWeatherSvg} alt="loading..." priority />
    </div>
  );
}

export { LoadingWeather };
