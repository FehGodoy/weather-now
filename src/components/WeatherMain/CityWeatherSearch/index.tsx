import React, { useRef, FormEvent } from "react";
import * as Styled from "./style";
import { MagnifyingGlass, X } from "phosphor-react";
import useWeatherHook from "@/hooks/useWeatherHook";

const CityWeatherSearch = () => {
	const { setLocationSearch } = useWeatherHook();
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = (event: FormEvent) => {
		event.preventDefault();
		const inputCity = inputRef?.current?.value;
		setLocationSearch(inputCity);
	};
	const clearInput = () => {
		const buttonClear = document.querySelector(
			".clearButton"
		) as HTMLElement | null;
		const inputCity = inputRef?.current?.value;
		if (buttonClear != null) {
			buttonClear.style.display = "block";
		}

		if (inputCity == "") {
			setLocationSearch("London");
		}
	};

	const hideClose = () => {
		const buttonClear = document.querySelector(
			".clearButton"
		) as HTMLElement | null;
		if (buttonClear != null) {
			buttonClear.style.display = "none";
		}
		setLocationSearch("London");
	};
	return (
		<>
			<Styled.BoxSearchCity>
				<div className="headerSearch">
					<form id="formCity" onSubmit={handleClick}>
						<input
							type="text"
							placeholder="Search city,state..."
							ref={inputRef}
							onChange={clearInput}
						/>
						<div className="resetInput">
							<button className="clearButton" type="reset" onClick={hideClose}>
								<X />
							</button>
						</div>
						<button type="submit" className="searchButton">
							<MagnifyingGlass />
						</button>
					</form>
				</div>
			</Styled.BoxSearchCity>
		</>
	);
};

export default CityWeatherSearch;
