import React from "react";
import "./App.css";
import CountryDist from "./components/CountryDist";
import CountryDistributionView from "./components/CountryDistributionView";
import CountrySubDivision from "./components/CountrySubDivision";
import {
  CountryFormatedData,
  SubCountryINDIAFormatedData,
  SubCountryUSAFormatedData,
  SubCountryViewFormatedData,
} from "./data/data";

function App() {
  // const [country, setCountry] = useState("IN");
  // const fixCountry = (country) => {
  //   setCountry(country);
  // };
  return (
    <div className="outerContainer">
      <CountryDist data={CountryFormatedData} />
      <CountrySubDivision country="IN" data={SubCountryINDIAFormatedData} />
      <CountrySubDivision country="US" data={SubCountryUSAFormatedData} />
      <CountryDistributionView data={SubCountryViewFormatedData} country="IN" />
    </div>
  );
}

export default App;
