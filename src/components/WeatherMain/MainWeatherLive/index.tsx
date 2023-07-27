"use client";
import React, { useEffect, useState } from "react";
import * as Styled from "./style";
import { Clock } from "phosphor-react";
import useWeatherHook from "@/hooks/useWeatherHook";
import Image from "next/image";

const MainWeatherLive = () => {
	const { weatherData } = useWeatherHook();
	const [formattedTime, setFormattedTime] = useState("");

	useEffect(() => {
		// Obter o horário atual quando o componente é montado
		const updateTime = () => {
			const currentTime = new Date().toLocaleString([], {
				hour: "2-digit",
				minute: "2-digit",
			});
			setFormattedTime(currentTime);
		};

		updateTime();
	}, []);

	// Extract only the hour part from currentTime
	const currentHour = Number(formattedTime.split(":")[0]);

	// Find the object with the time closest to the current time
	const currentHourData = weatherData?.forecast.forecastday[0].hour.find(
		(hourData: any) => {
			const hour = new Date(hourData.time).getHours();

			// Compare the hour part only
			return hour === currentHour;
		}
	);

	const greaterCurrentTime = weatherData?.forecast.forecastday[0].hour.filter(
		(hourData: any) => {
			const hour = new Date(hourData.time).getHours();

			// Compare the hour part only
			return hour > currentHour;
		}
	);

	return (
		<>
			<Styled.HeaderBox>
				<h6>Weather Now</h6>
			</Styled.HeaderBox>
			<Styled.Container>
				<div className="mainInformation">
					<div className="temperature">
						<span>{weatherData?.current.temp_c}°C</span>
					</div>
					<div></div>
					<div className="boxCity">
						<div className="city">
							<span>{weatherData?.location.name}</span>
						</div>
						<div className="tempoHoras">
							<span>{formattedTime}</span>
						</div>
					</div>
					<div className="iconHas">
						{weatherData && (
							<div className="iconHas">
								<Image
									src={`https:${weatherData?.current?.condition?.icon}`}
									alt={weatherData?.current?.condition?.text}
									width={100}
									height={100}
								/>
								<span>{weatherData?.current?.condition?.text}</span>
							</div>
						)}
					</div>
				</div>
				<div className="footerBox">
					<div className="headerFooter">
						<Clock />
						<span>Hours</span>
					</div>
					<div className="listHours">
						<ul className="boxTT">
							{/* Use the currentHourData here */}
							{currentHourData && (
								<li>
									<div className="title">
										<span>
											{new Date(currentHourData?.time).toLocaleString([], {
												hour: "2-digit",
												minute: "2-digit",
											})}
										</span>
									</div>
									<div className="temperature">
										<Image
											src={`https:${currentHourData?.condition?.icon}`}
											alt={currentHourData?.condition?.text}
											width={50}
											height={50}
										/>
										<span>{currentHourData?.temp_c}º</span>
									</div>
								</li>
							)}
							{greaterCurrentTime &&
								greaterCurrentTime.map((hourData: any, index: number) => (
									<li key={index}>
										<div className="title">
											<span>
												{new Date(hourData.time).toLocaleString([], {
													hour: "2-digit",
													minute: "2-digit",
												})}
											</span>
										</div>
										<div className="temperature">
											<Image
												src={`https:${hourData?.condition?.icon}`}
												alt={hourData?.condition?.text}
												width={50}
												height={50}
											/>
											<span>{hourData?.temp_c}º</span>
										</div>
									</li>
								))}
						</ul>
					</div>
				</div>
			</Styled.Container>
		</>
	);
};

export default MainWeatherLive;
