import { useContext } from "react";
import WeatherContext from "@/context/WeatherContext";

const useWeatherHook = () => useContext(WeatherContext);

export default useWeatherHook;
