import React, { useEffect, useState } from "react";
import axios from "axios";

const FOX_URL = `https://randomfox.ca/floof/`;
const WORD_URL = `https://random-words-api.vercel.app/word`;
//const refresh = false;

function Home() {
	const [fox, setFox] = useState();
	const [wordData, setWord] = useState();

	useEffect(() => {
		//if (refresh) {
			axios
				.get(FOX_URL)
				.then(function (response) {
					setFox(response.data.image);
				})
				.catch(function (error) {
					// handle error
					console.warn(error);
				});
		//}
	}, []);

  useEffect(() => {
		//if (refresh) {
			axios
				.get(WORD_URL)
				.then(function (response) {
          console.log(response.data[0].word);
					setWord(response.data[0]);
				})
				.catch(function (error) {
					// handle error
					console.warn(error);
				});
		//}
	}, []);

	return (
		<main>
			<img src={fox} alt="A random image of a duck"></img>
		</main>
	);
}

export default Home;
