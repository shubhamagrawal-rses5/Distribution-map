import React from "react";
import "./App.css";
import CountryDist from "./components/CountryDist";
import CountrySubDivision from "./components/CountrySubDivision";
import { CountryFormatedData, SubCountryINDIAFormatedData, SubCountryUSAFormatedData } from "./data/data";

function App() {
  // const [country, setCountry] = useState("IN");
  // const fixCountry = (country) => {
  //   setCountry(country);
  // };
  return (
    <>
      <CountryDist data = {CountryFormatedData} />
      <CountrySubDivision country="IN" data={SubCountryINDIAFormatedData}/>
      <CountrySubDivision country="US" data={SubCountryUSAFormatedData}/>
    </>
  );
}

export default App;
