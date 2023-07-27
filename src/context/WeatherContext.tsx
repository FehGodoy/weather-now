"use client";
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { WeatherData } from "@/types/global";

const WeatherContext = createContext<any>({});

export function WeatherProvider({ children }: { children: React.ReactNode }) {
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
	const [locationSearch, setLocationSearch] = useState<string>("London");

	const getWeatherData = async () => {
		try {
			const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
			const response = await axios.get<WeatherData>(
				`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${locationSearch}&aqi=no`
			);
			setWeatherData(response.data);
		} catch (error) {
			console.error("Error fetching weather data:", error);
		}
	};
	useEffect(() => {
		getWeatherData();
	}, [locationSearch]);
	return (
		<WeatherContext.Provider
			value={{ weatherData, setWeatherData, locationSearch, setLocationSearch }}
		>
			{children}
		</WeatherContext.Provider>
	);
}

export default WeatherContext;
