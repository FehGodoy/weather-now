import { WeatherProvider } from "@/context/WeatherContext";
import "./globals.css";
import StyledComponentsRegistry from "./registry";

export const metadata = {
	title: "Weather Now",
	description: "Know the weather now, from anywhere in the world!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<StyledComponentsRegistry>
				<WeatherProvider>
					<body>{children}</body>
				</WeatherProvider>
			</StyledComponentsRegistry>
		</html>
	);
}
