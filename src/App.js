import React, { useState } from "react";
import "./App.css";
import "./../src/components/CountryDist";
import CountryDist from "./components/CountryDist";
import CountrySubDivision from "./components/CountrySubDivision";

function App() {
  const [country, setCountry] = useState("IN");
  const fixCountry = (country) => {
    setCountry(country);
  };
  return (
    <>
      <CountryDist country={country} fixCountry={fixCountry}/>
      <CountrySubDivision country={country} />
    </>
  );
}

export default App;
