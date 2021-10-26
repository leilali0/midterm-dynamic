import React from "react";

function Word({ wordInfo = "unknown", definition = "unknown" }) {
	return (
		<section>
			<p>The word is: {wordInfo}</p>

			<p>The definition is: {definition}</p>
		</section>
	);
}

export default Word;
