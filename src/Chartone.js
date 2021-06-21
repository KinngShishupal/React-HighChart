import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Chartone() {
  const options = {
    chart: {
      type: "pie"
    },
    colors: ["blue", "red", "green"],
    title: {
      text: "My chart"
    },
    series: [
      { y:100,
        data: [
          { name: "test1", y: 1 },
          { name: "test2", y: 9 },
          { name: "test3", y: 1 }
        ]
      }
    ],
    tooltip: {
      pointFormat:
        "{series.name}: <br>{point.percentage:.1f} %<br>total: {point.total}"
    },
    plotOptions: {
      pie: {
        innerSize: "85%",
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format:
            "<b>{point.name}</b>:<br>{point.percentage:.1f} %<br>total: {point.total}"
        },
        showInLegend: true
      }
    }
  };
  return (
    <div className="App">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
