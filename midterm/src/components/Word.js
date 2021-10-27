import React from "react";

function Word({ wordInfo = "unknown", definition = "unknown" }) {
	return (
		<section>
			<p className="word"><b>{wordInfo}</b></p>

			<p className="def">{definition}</p>
		</section>
	);
}

export default Word;
