import React from "react";
import { Chart } from "react-google-charts";
import { Countrydata } from "./../data/data";

const data = Countrydata;

const options = {
  region: "world",
  colorAxis: { colors: ["#47B5FF", "#1363DF", "#06283D"] },
  //   backgroundColor: "#f8bbd0",
  datalessRegionColor: "#DFF6FF",
  //   defaultColor: "#f5f5f5",
};

export default function CountryDist(props) {
  // props.fixCountry("AF")
  return (
    <>
      <h2>Country Distribution</h2>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              console.log(chart)
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="50vh"
        data={data}
        options={options}
      />
    </>
  );
}
