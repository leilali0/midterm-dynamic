import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import HolidayCard from "../components/Holiday";

const FOX_URL = `https://randomfox.ca/floof/`;

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function Home() {
	const [fox, setFox] = useState();
	const [country, setCountry] = useState();
	const [holidayData, setHoliday] = useState();
	let query = useQuery();

	const HOLIDAY_API = `https://date.nager.at/api/v3/publicholidays/2022/${country}`;

	useEffect(() => {
		const countryCode = query.get("country");
		setCountry(countryCode);
	}, [query]);

	useEffect(() => {
		if (country) {
			axios
				.get(HOLIDAY_API)
				.then(function (response) {
					setHoliday(response.data);
				})
				.catch(function (error) {
					console.warn(error);
				});
		}
	}, [country]);

	useEffect(() => {
		if (country) {
			axios
				.get(FOX_URL)
				.then(function (response) {
					setFox(response.data.image);
				})
				.catch(function (error) {
					// handle error
					console.warn(error);
				});
		}
	}, [country]);

	return (
		<main>
			<img src={fox} alt="A random image of a duck"></img>

			<div>
				{holiday.map((holiday, key) => (
					<Holiday holiday={holiday} key={key} />
				))}
			</div>
		</main>
	);
}

export default Home;
