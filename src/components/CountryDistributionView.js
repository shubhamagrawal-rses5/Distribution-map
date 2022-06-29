import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export default function CountryDistributionView(props) {
  const [region, setRegion] = useState("IN");
  const [data, setData] = useState();
  useEffect(() => {
    setRegion(props.country);
    setData(props.data);
  }, [props.country, props.data]);

  const options = {
    region: region,
    displayMode: "markers",
    resolution: "provinces",
    colorAxis: { colors: ["#47B5FF", "#1363DF", "#06283D"] },
    //   backgroundColor: "#f8bbd0",
    datalessRegionColor: "#DFF6FF",
    //   defaultColor: "#f5f5f5",
  };

  return (
    <>
      {/* <h2>{"Detailed Country View - " + props.country}</h2> */}
      <Chart
        chartType="GeoChart"
        width="100%"
        height="50vh"
        data={data}
        options={options}
        mapsApiKey="AIzaSyATwbzs2QohcNsG31ErEkkKD2DciXXSFYw"
      />
    </>
  );
}
