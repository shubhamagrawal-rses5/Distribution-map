import React from "react";
import { Chart } from "react-google-charts";

const options = {
  region: "world",
  colorAxis: { colors: ["#47B5FF", "#1363DF", "#06283D"] },
  //   backgroundColor: "#f8bbd0",
  datalessRegionColor: "#DFF6FF",
  //   defaultColor: "#f5f5f5",
};

export default function CountryDist(props) {
  // props.fixCountry("AF")
  const data = props.data;
  return (
    <>
      <h2>Country Distribution</h2>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              console.log(selection)
              if (selection.length !== 0){
                const region = data[selection[0].row + 1];
                console.log("Selected : " + region);
              }
              
            },
          }
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
