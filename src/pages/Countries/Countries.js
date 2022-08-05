import React, { useEffect, useState } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, [countries]);
  return (
    <div>
      <h1>
        There are <mark>{countries.length}</mark> in the world{" "}
      </h1>
     

    </div>
  );
};

export default Countries;
