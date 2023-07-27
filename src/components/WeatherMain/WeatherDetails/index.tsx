import * as Styled from "./style";
import useWeatherHook from "@/hooks/useWeatherHook";

const WeatherDetails = () => {
	const { weatherData } = useWeatherHook();
	return (
		<>
			<Styled.boxDetailsWeather>
				<div className="header">
					<h6>Weather Details</h6>
				</div>
				<div className="infoAllWeather">
					<div className="box">
						<div className="title">
							<h6>Humidity</h6>
						</div>
						<div className="value">
							<h6>{weatherData?.current?.humidity}%</h6>
						</div>
					</div>
					<div className="box">
						<div className="title">
							<h6>Feeling</h6>
						</div>
						<div className="value">
							<h6>{weatherData?.current?.feelslike_c}°C</h6>
						</div>
					</div>
					<div className="box">
						<div className="title">
							<h6>UV Index</h6>
						</div>
						<div className="value">
							<h6>{weatherData?.current?.uv}</h6>
						</div>
					</div>
					<div className="box">
						<div className="title">
							<h6>Wind Gusts</h6>
						</div>
						<div className="value">
							<h6>{weatherData?.current?.gust_mph} mph</h6>
						</div>
					</div>
					<div className="box">
						<div className="title">
							<h6>Wind Direction</h6>
						</div>
						<div className="value">
							<h6>{weatherData?.current?.wind_dir}</h6>
						</div>
					</div>
				</div>
			</Styled.boxDetailsWeather>
		</>
	);
};

export default WeatherDetails;
