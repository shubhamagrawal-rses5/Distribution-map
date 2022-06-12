import React, { useState ,useEffect} from "react";
import { Chart } from "react-google-charts";



export default function CountrySubDivision(props) {
 
  const [region, setRegion] = useState("IN");
  useEffect(()=>{
    setRegion(props.country)
  },[props.country])
  const data = props.data;

  const options = {
    region: region,
    resolution: "provinces",
    colorAxis: { colors: ["#47B5FF", "#1363DF", "#06283D"] },
    //   backgroundColor: "#f8bbd0",
    datalessRegionColor: "#DFF6FF",
    //   defaultColor: "#f5f5f5",
  };
  
  return (
    <>
      <h2>{"Detailed Country View - Subdivision Distribution " + props.country }</h2>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              console.log(selection);
              if (selection.length !== 0) {
                const region = data[selection[0].row + 1];
                console.log("Selected : " + region);
              }
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
