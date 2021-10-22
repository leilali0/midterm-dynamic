import React from "react";

function Holiday({
  commonName = "Unknown",
  officialName = "Unknown",
  countryCode = "Unknown",
  region = "Unknown",
}) {
	return (
    <section>
      <p>{commonName}</p>
      <p>{officialName}</p>
      <p>{countryCode}</p>
      <p>{region}</p>
    </section>
  );
}

export default Holiday;