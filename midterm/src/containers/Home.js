import React, { useEffect, useState } from "react";
import axios from "axios";

const FOX_URL = `https://randomfox.ca/floof/`;

function Home() {
  const [fox, setFox] = useState();
  const [country, setCountry] = useState();

  const HOLIDAY_API = `https://date.nager.at/api/v3/publicholidays/2022/${country}`

  useEffect(() =>{
    axios
      .get(FOX_URL)
      .then(function (response) {
        console.log(response.data.image);
        setFox(response.data.image);
      })
      .catch(function (error) {
        // handle error
        console.warn(error);
      });
  }, [country]);

  return (
  
    <main>
      <img src={fox} alt="A random image of a duck"></img>
    </main>
   
  );
}

export default Home;