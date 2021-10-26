import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Word from "../components/Word";

const FOX_URL = `https://randomfox.ca/floof/`;
const WORD_URL = `https://random-words-api.vercel.app/word`;

function Home() {
	const [fox, setFox] = useState();
	const [wordData, setWord] = useState();

	//source: https://upmostly.com/tutorials/how-to-refresh-a-page-or-component-in-react
	function refreshPage() {
    window.location.reload(false);
  }

	useEffect(() => {
		axios
			.get(FOX_URL)
			.then(function (response) {
				setFox(response.data.image);
			})
			.catch(function (error) {
				console.warn(error);
			});
	}, []);

	useEffect(() => {
		axios
			.get(WORD_URL)
			.then(function (response) {
				console.log(response.data[0]);
				setWord(response.data[0]);
			})
			.catch(function (error) {
				console.warn(error);
			});
	}, []);

	const { wordInfo, definition } = useMemo(() => {
		if (!wordData) return {};
		return {
			wordInfo: wordData.word,
			definition: wordData.definition,
		};
	}, [wordData]);

	return (
		<main className="App">
			<div className="fox">
				<img src={fox} alt="A random image of a duck" ></img>
			</div>

			<Word wordInfo={wordInfo} definition={definition} />

			<div>
      <button onClick={refreshPage}>Next</button>
   		</div>
		</main>
	);
}

export default Home;
