"use client";
import CityWeatherSearch from "./CityWeatherSearch";
import MainWeatherLive from "./MainWeatherLive";
import WeatherDetails from "./WeatherDetails";
import coldImage from "../../assets/cold.jpg";
import sunImage from "../../assets/sun.jpg";
import rainImage from "../../assets/rain.jpg";
import cloudy from "../../assets/cloudy.jpg";
import useWeatherHook from "@/hooks/useWeatherHook";

const WeatherMain = () => {
	const { weatherData } = useWeatherHook();

	const getConditionName = (code: number) => {
		const conditions = {
			SUN: [1000],
			CLOUDY: [1003, 1006, 1009, 1030, 1087, 1273, 1276, 1240, 1249],
			RAIN: [
				1063, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195,
				1198, 1201, 1243, 1246, 1252, 1255, 1258, 1261, 1264,
			],
			COLD: [1066, 1114, 1204, 1210, 1213, 1216, 1255, 1258, 1279, 1282],
		};

		for (const [conditionName, conditionCodes] of Object.entries(conditions)) {
			if (conditionCodes.includes(code)) {
				return conditionName;
			}
		}

		// Return "Desconhecido" caso o código não corresponda a nenhuma condição conhecida
		return "Desconhecido";
	};
	// Define a default image source
	let backgroundImageSrc = sunImage.src;

	// Set the background image based on the condition name
	if (getConditionName(weatherData?.current?.condition?.code) === "RAIN") {
		backgroundImageSrc = rainImage.src;
	} else if (
		getConditionName(weatherData?.current?.condition?.code) === "SUN"
	) {
		backgroundImageSrc = sunImage.src;
	} else if (
		getConditionName(weatherData?.current?.condition?.code) === "COLD"
	) {
		backgroundImageSrc = coldImage.src;
	} else if (
		getConditionName(weatherData?.current?.condition?.code) === "CLOUDY"
	) {
		backgroundImageSrc = cloudy.src;
	}
	return (
		<div className="boxAllWeather">
			<div
				className="backgroundWeather"
				style={{
					backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.85) 0, rgba(0,0,0,.85) 100%), url(${backgroundImageSrc})`,
				}}
			></div>
			<div className="boxAllInff">
				<div className="mainWeather">
					<MainWeatherLive />
				</div>
				<div className="otherInfoWeather">
					<CityWeatherSearch />
					<WeatherDetails />
				</div>
			</div>
		</div>
	);
};

export default WeatherMain;
